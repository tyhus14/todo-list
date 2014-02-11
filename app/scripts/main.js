var todoList = [
  {
    description: 'Do the Dishes',
    done: false,
    id: _.uniqueId()
  },
  {
    description: 'Read a Book',
    done: true,
    id: _.uniqueId()
  },
  {
    description: 'Work Out',
    done: false,
    id: _.uniqueId()
  }
]


$(document).ready(function(){

  var todoTemplate = _.template($('.todo-template').text())

  // render preloaded data
  _.each(todoList, function(item){
    $('.todo-items').prepend( todoTemplate(item) )
  });

  $('.todo-items').on('click', '.js-remove-todo', function(){
    var parentId = $(this).parent().attr('id').split('-')[1]; 

    todoList = _.reject(todoList, function(item){ 
      return item.id == parentId;
    });

    $(this).parent().remove();

  });


  // complete button
  $('.todo-items').on('click', '.js-complete-todo', function(){
  	$(this).parent('.todo-item').toggleClass('active');
		
  		$(this).parent(_.each(todoList, function(item){
    			item.done = true;
 		 }))
   
  });


 

  // Setup Add Button click event
  $('.js-add-todo').click(function(){

    // grab the description from the input
    var description = $('.js-new-todo-input').val();

    // create an object literal with the description
    // and 'done' set to false
    var todo = {
      description: description,
      done: false,
      id: _.uniqueId()
    }

     todoList.push(todo);

    // store the rendered template string
    var renderedTemplate = todoTemplate(todo);

    // now prepend the template into the dom
    $('.todo-items').prepend(renderedTemplate);
  })

});