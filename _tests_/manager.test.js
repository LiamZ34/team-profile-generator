const Manager = require('../lib/Manager')

test('can create engineer class object', () => {
    const e = new Manager()
    expect(typeof(e)).toBe('object')
})

test('can set name via contructor argument', () => {
    const name = 'william'
    const e = new Manager(name)
    expect(e.name).toBe(name)
})

test('can set id via contructor argument', () => {
    const id = 2
    const e = new Manager('william', id)
    expect(e.id).toBe(id) 
})

test('can set email via constructor argument', () => {
    const email = 'william@gmail.com'
    const e = new Manager('william', 2, email)
    expect(e.email).toBe(email) 
})

test('can set github via constructor argument', () => {
    const officeNumber = 4
    const e = new Manager('william', 2, 'william@gmail.com', officeNumber)
    expect(e.officeNumber).toBe(officeNumber) 
})

test('can get role via getRole', () => {
    const role = 'Manager'
    const e = new Manager('manager')
    expect(e.getRole()).toBe(role) 
})

test('can get officeNumber via getOfficeNumber', () => {
    const officeNumber = 4
    const e = new Manager('william', 2, 'william@gmail.com', officeNumber)
    expect(e.officeNumber).toBe(officeNumber) 
})

