const Engineer = require('../lib/Engineer')

test('can create engineer class object', () => {
    const e = new Engineer()
    expect(typeof(e)).toBe('object')
})

test('can set name via contructor argument', () => {
    const name = 'william'
    const e = new Engineer(name)
    expect(e.name).toBe(name)
})

test('can set id via contructor argument', () => {
    const id = 2
    const e = new Engineer('william', id)
    expect(e.id).toBe(id) 
})

test('can set email via constructor argument', () => {
    const email = 'william@gmail.com'
    const e = new Engineer('william', 2, email)
    expect(e.email).toBe(email) 
})

test('can set github via constructor argument', () => {
    const github = 'liamz34'
    const e = new Engineer('william', 2, 'william@gmail.com', github)
    expect(e.github).toBe(github) 
})

test('can get role via getRole', () => {
    const role = 'Engineer'
    const e = new Engineer('engineer')
    expect(e.getRole()).toBe(role) 
})

test('can get github via getGitHub', () => {
    const github = 'liamz34'
    const e = new Engineer('william',2, 'williamh2461@hotmail.com', github)
    expect(e.getGitHub()).toBe(github) 
}) 