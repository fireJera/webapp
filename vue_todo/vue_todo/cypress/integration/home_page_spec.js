describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.server()
        cy.fixture('todolistGet.json').as('getTodolist')
        cy.fixture('todolistPost.json').as('postTodolist')
        cy.route('GET', '/todolists', '200', 'getTodolist')
        cy.route('POST', '/todolists', '200', 'postTodolist')
        
        cy.visit('/')

        cy.get('.taskInput').type('cypress task') 
        cy.get('.taskSubmit').click() 
    })    
})