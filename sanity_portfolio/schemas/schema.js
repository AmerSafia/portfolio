import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import experience from './experience'
import projects from './projects'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user, experience,projects ]),
})
