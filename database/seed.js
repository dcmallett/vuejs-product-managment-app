//you can change the faker on the end to anything i.e spiderman etc etc
/* eslint-env node */
import { fakerEN_GB as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

console.log(supabase)
