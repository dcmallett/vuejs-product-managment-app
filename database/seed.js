/* eslint-env node */
//you can change the faker on the end to anything i.e spiderman etc etc

import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const logErrorAndExit = (tableName, error) => {
  console.error(
    `An error occurred in table '${tableName}' with code ${error.code}: ${error.message}`
  )
  process.exit(1)
}

const logStep = (stepMessage) => {
  console.log(stepMessage)
}
//seed the table
const seedProjects = async (numEntries) => {
  logStep('Seeding projects...')
  //we create an array of projects
  const projects = []

  //we then create a loop in performs a number of itterations according to the numEntries
  //param we pass to faker function
  //we pass it our fake data and pass it to the projects array so now it holds all the project obj data
  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3])
    })
  }
  //then we fire it once and insert projects into our projects table

  const { data, error } = await supabase.from('projects').insert(projects).select('id')

  if (error) return logErrorAndExit('Projects', error)

  logStep('Projects seeded successfully.')

  return data
}

const seedDatabase = async (numEntriesPerTable) => {
  await seedProjects(numEntriesPerTable)
}

const numEntriesPerTable = 10

seedDatabase(numEntriesPerTable)
