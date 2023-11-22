import { g, config } from '@grafbase/sdk';


const User=g.model('User',{
  name:g.string().length({min:2,max:30}),
  avatarUrl:g.url(),
  description:g.string().optional(),
  email:g.email().unique(),
  githubUrl:g.url().optional(),
  linkedinUrl:g.url().optional(),
  projects:g.relation(()=>Project).list(),
})


const Project=g.model('Project',{
  title:g.string().length({min:4,max:30}),
  description:g.string(),
  imageUrl:g.url(),
  livesiteUrl:g.url(),
  githubUrl:g.url(),
  category:g.string().search(),
  createdBy:g.relation(()=>User)


})

export default config({
  schema: g,
  
})
