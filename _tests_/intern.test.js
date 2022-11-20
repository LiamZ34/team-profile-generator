const Intern = require("../lib/Intern")

test('can create intern class object', () => {
    const e = new Intern()
    expect(typeof(e)).toBe('object')
})

test('can set name via contructor argument', () => {
    const name = 'william'
    const e = new Intern(name)
    expect(e.name).toBe(name)
})

test('can set id via contructor argument', () => {
    const id = 2
    const e = new Intern('william', id)
    expect(e.id).toBe(id) 
})

test('can set email via constructor argument', () => {
    const email = 'william@gmail.com'
    const e = new Intern('william', 2, email)
    expect(e.email).toBe(email) 
})

test('can set school via constructor argument', () => {
    const school = 'william@gmail.com'
    const e = new Intern('william', 2, 'william@gmail.com', school)
    expect(e.school).toBe(school) 
})

test('can get role via getRole', () => {
    const role = 'Intern'
    const e = new Intern('Intern')
    expect(e.getRole()).toBe(role) 
})

test('can get school via getSchool', () => {
    const school = 'harvard'
    const e = new Intern('william', 2, 'Intern', school)
    expect(e.getSchool()).toBe(school) 
})


