/* global describe, it */

(function () {
    'use strict';

    describe('In the Todo App', function () {
        describe('when the add button is clicked', function () {
            it('should add a new todo div when the input it populated', function () {

              // Add text to the .new-todo input
              $('.maininput').val('Drink beer');

              // Click the "add" button
              $('.js-add-btn').click();

              // Store the value of the first todo div's text
              var firstTodoText = $('.todo-item').first().children('.description').text();


              expect(firstTodoText).to.contain('Drink beer');

            });
        });


         describe('when the delete button is clicked', function () {
            it('should reduce the length of the array by 1', function () {
            	var todoList = [{description: 'Do the Dishes', done: false, id: _.uniqueId()}, {description: 'Read a Book', done: true, id: _.uniqueId()}, {description: 'Work Out', done: false, id: _.uniqueId()}]				
            	todoList.remove([0])
              	expect(todoList.length).to.equal(2);
            });

            it("should return true on successful removal", function(){
        	  	var todoList = [{description: 'Do the Dishes', done: false, id: _.uniqueId()}, {description: 'Read a Book', done: true, id: _.uniqueId()}, {description: 'Work Out', done: false, id: _.uniqueId()}]				
            	todoList.remove([0])
            	expect(todoList.remove([0])).to.equal(true);
        });
        });
    });
})();
