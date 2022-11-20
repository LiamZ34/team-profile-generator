const Employee = require('../lib/Employee')

test('can create employee class object', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object') 
})

test('can set name via constructor argument', () => {
    const name = 'william'
    const e = new Employee(name)
    expect(e.name).toBe(name) 
})

test('can set id via constructor argument', () => {
    const id = 2
    const e = new Employee('william', id)
    expect(e.id).toBe(id) 
})

test('can set email via constructor argument', () => {
    const email = 'william@gmail.com'
    const e = new Employee('william', 2, email)
    expect(e.email).toBe(email) 
})

test('can get name via getName', () => {
    const name = 'william'
    const e = new Employee('william')
    expect(e.getName()).toBe(name) 
}) 

test('can get id via getId', () => {
    const id = 2
    const e = new Employee('william', id)
    expect(e.getId()).toBe(id) 
}) 

test('can get email via getEmail', () => {
    const email = 'william@gmail.com'
    const e = new Employee('william', 2, email)
    expect(e.getEmail()).toBe(email) 
}) 

test('can get role via getRole', () => {
    const role = 'Employee'
    const e = new Employee('william', 2, 'williamh2461@gmail.com', 'employee')
    expect(e.getRole()).toBe(role) 
})


 

