//you can change the faker on the end to anything i.e spiderman etc etc
/* eslint-env node */
import { fakerEN_GB as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const seedProjects = async (numEntries) => {
  //seed the table

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
  await supabase.from('projects').insert(projects)
}

await seedProjects(10)
