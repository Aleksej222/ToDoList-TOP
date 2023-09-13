import { Task } from "./Task";
import { listOptionSelected } from "./showCorrectProject";

export function addNewTask() {
    
    // console.log(listOptionSelected);

    // ** Dodat u listOptionSelected projekt zadatak

    openModalWindow();
}


function openModalWindow() {

    let tasksContainer = document.querySelector('.tasks-container');

    // TODO: Dodat position absolute (tako nekako), pravilno pozicionirat modal window
    tasksContainer.appendChild(createModalWindowHTML());

}

function createModalWindowHTML() {

    let modalWindow = document.createElement('div');
    modalWindow.classList.add('modal-window');

    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    let containerModal = document.createElement('div');
    containerModal.classList.add('container-modal');   

    let modalTop = document.createElement('div');
    modalTop.classList.add('modal-top');

    let addTaskTitle = document.createElement('h3');
    addTaskTitle.innerText = 'Add New Task';
    
    let closeTask = document.createElement('span');
    closeTask.classList.add('close-modal');
    closeTask.innerText = '&times;  ';

    modalTop.appendChild(addTaskTitle);
    modalTop.appendChild(closeTask);

    let containerTaskInfo = document.createElement('div');
    containerTaskInfo.classList.add('container-task-info');

    let formTaskInfo = document.createElement('form');
    // TODO: Set attributes later (for everything), look at html example

    let spanRequired = document.createElement('span');  // This span element is used multiple times
    spanRequired.innerText = '*';

    let containerInput1 = document.createElement('div');
    containerInput1.classList.add('container-input');
    

    let labelTitle = document.createElement('label');
    labelTitle.innerText = 'Title';
    labelTitle.appendChild(spanRequired);

    let inputTitle = document.createElement('input');

    let spanTitleError = document.createElement('span');
    spanTitleError.classList.add('error-message');
    spanTitleError.appendChild(spanRequired);

    containerInput1.appendChild(labelTitle);
    containerInput1.appendChild(inputTitle);
    containerInput1.appendChild(spanTitleError);
    
    // TODO: Kalendar za datum

    // TODO: Textarea za deskripciju

    // TODO: Dropdown za priority zadatka

    formTaskInfo.appendChild(containerInput1);

    containerTaskInfo.appendChild(formTaskInfo);

    containerModal.appendChild(modalTop);
    containerModal.appendChild(containerTaskInfo);
    modalContent.appendChild(containerModal);
    modalWindow.appendChild(modalContent);

    return modalWindow;
}

/*

<div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div class="container-modal">
            <div class="modal-top">
                <h3 class="add-book-title">Add New Book</h3>
                <span class="close">&times;</span>
            </div>

            <!-- Put required back later -->
            <div class="container-book-info">
                <form id="book-info-form" action="" method="post">
                   
                    <div class="container-input">
                        <label for="title">Title<span aria-label="required">*</span></label>
                        <input data-form-field type="text" name="title" placeholder="Title" minlength="2">
                        <span class="error-message"><span aria-label="required">*</span> Book title is
                            required</span>
                    </div>

                    <div class="container-input">
                        <label for="author">Author<span aria-label="required">*</span></label>
                        <input data-form-field type="text" name="author" placeholder="Author" minlength="2" maxlength="20">
                        <span class="error-message"><span aria-label="required">*</span> Book author is
                            required</span>
                    </div>

                    <div class="container-input">
                        <label for="numOfPages">Pages<span aria-label="required">*</span></label>
                        <input data-form-field type="number" name="numOfPages" placeholder="Number of pages"
                            min="0">
                        <span class="error-message"><span aria-label="required">*</span> Number of pages is
                            required</span>
                    </div>

                    <div class="container-input">
                        <label for="language">Language<span aria-label="required">*</span></label>
                        <input data-form-field type="text" name="language" placeholder="Language"
                            minlength="2" maxlength="20">
                        <span class="error-message"><span aria-label="required">*</span> Book language is
                            required</span>
                    </div>

                    <div class="container-input">
                        <label for="read">Read<span aria-label="required">*</span></label>
                        <select data-form-field name="read">
                            <option value="" disabled selected>Did you read the book?</option>
                            <option value=true>Read</option>
                            <option value=false>Didn't read</option>
                        </select>
                        <span class="error-message"><span aria-label="required">*</span> Reading status is
                            required</span>
                    </div>

                    <div class="container-btn-submit">
                        <button id="submit-book" type="submit" class="btn btn-submit">Submit</button>
                    </div>

                </form>
            </div>

        </div>

    </div>

</div>
*/