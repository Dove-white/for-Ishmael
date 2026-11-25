  /*
   * ╔══════════════════════════════════════════╗
   * ║   DevTasks — DOM Manipulation Starter   ║
   * ║   Read the comments to learn how it     ║
   * ║   all works! Great for beginners.       ║
   * ╚══════════════════════════════════════════╝
   */

  // ── 1. QUERY THE DOM ──────────────────────────────────────────
  // querySelector / getElementById let us grab HTML elements as JS objects.
  const taskInput      = document.getElementById('task-input');
  const addBtn         = document.getElementById('add-btn');
  const taskList       = document.getElementById('task-list');
  const emptyState     = document.getElementById('empty-state');
  const prioritySelect = document.getElementById('priority-select');
  const progressFill   = document.getElementById('progress-fill');
  const progressPct    = document.getElementById('progress-pct');
  const statTotal      = document.getElementById('stat-total');
  const statDone       = document.getElementById('stat-done');
  const statPending    = document.getElementById('stat-pending');
  const filterBtns     = document.querySelectorAll('.filter-btn');

  // ── 2. APP STATE ──────────────────────────────────────────────
  // We store all tasks in a plain JS array. Each task is an object.
  let tasks = [
    { id: uid(), text: 'Learn querySelector and getElementById', priority: 'high',   done: false },
    { id: uid(), text: 'Understand addEventListener and event objects', priority: 'high',   done: false },
    { id: uid(), text: 'Practice createElement and appendChild', priority: 'medium', done: false },
    { id: uid(), text: 'Style elements with classList.add / toggle', priority: 'medium', done: true  },
    { id: uid(), text: 'Read MDN Web Docs every day', priority: 'low',    done: false },
  ];
  let activeFilter = 'all';

  // ── 3. HELPER: unique ID ──────────────────────────────────────
  function uid() {
    // Math.random gives us a number like 0.3456789
    // .toString(36) converts it to base-36 (letters + numbers)
    // .slice(2) removes the "0." prefix
    return Math.random().toString(36).slice(2, 9);
  }

  // ── 4. RENDER ─────────────────────────────────────────────────
  // This is the main function. It clears the list and redraws it
  // from scratch using the tasks[] array. This pattern is called
  // "declarative rendering" — describe what it should look like,
  // not how to change it step by step.
  function render() {
    // Clear the current list
    taskList.innerHTML = '';

    // Decide which tasks to show based on the active filter
    const visible = tasks.filter(t => {
      if (activeFilter === 'pending')   return !t.done;
      if (activeFilter === 'completed') return  t.done;
      return true; // 'all'
    });

    // Show or hide the empty state message
    emptyState.classList.toggle('visible', visible.length === 0);

    // Loop through visible tasks and build a card for each one
    visible.forEach(task => {
      // ── createElement: build the card element ──
      const li = document.createElement('li');
      li.classList.add('task-card');
      if (task.done) li.classList.add('completed');
      li.dataset.id = task.id; // store the task id on the element

      // ── innerHTML: set the card's inner structure ──
      // (For production apps, avoid innerHTML with user input — use
      //  createElement + textContent to prevent XSS attacks.)
      li.innerHTML = `
        <button class="complete-btn ${task.done ? 'done' : ''}"
                aria-label="${task.done ? 'Mark incomplete' : 'Mark complete'}"
                title="Toggle ${task.done ? 'Complete' : 'incomplete'}">
          <svg class="tick" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <span class="task-text"></span>
        <span class="priority-badge ${task.priority}">${task.priority}</span>
        <button class="delete-btn" aria-label="Delete task" title="Delete">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      `;

      // Use textContent (not innerHTML) for user text to prevent XSS
      li.querySelector('.task-text').textContent = task.text;

      // ── appendChild: add the card to the list ──
      taskList.appendChild(li);
    });

    updateStats();
  }

  // ── 5. UPDATE STATS ───────────────────────────────────────────
  function updateStats() {
    const total   = tasks.length;
    const done    = tasks.filter(t => t.done).length;
    const pending = total - done;
    const pct     = total === 0 ? 0 : Math.round((done / total) * 100);

    // textContent lets us change what text is displayed inside an element

    statTotal.textContent   = statTotal.textContent.replace("1", total);
    statDone.textContent    = statDone.textContent.replace("0", done);
    statPending.textContent = `${pending} left`;
    progressPct.textContent = `${pct}%`;

    // style.width is how we change CSS from JS
    progressFill.style.width = `${pct}%`;
  }

  // ── 6. ADD TASK ───────────────────────────────────────────────
  function addTask() {
    const text = taskInput.value.trim(); // .trim() removes whitespace

    if (!text) {
      // Shake the input box if empty
      taskInput.parentElement.style.animation = 'none';
      requestAnimationFrame(() => {
        taskInput.parentElement.style.animation = 'shake 0.35s ease';
      });
      return;
    }

    // Build a new task object and push it to the array
    const newTask = {
      id:       uid(),
      text:     text,
      priority: prioritySelect.value,
      done:     false,
    };

    tasks.unshift(newTask); // unshift adds to the FRONT of the array

    taskInput.value = ''; // clear the input
    if (activeFilter === 'completed') {
      activeFilter = 'all'

      filterBtns.forEach(btn => {
        btn.dataset.filter === "all" ? btn.classList.add('active') : btn.classList.remove('active');
      })
    
    }; // reset filter
    render();
  }

  // ── 7. TOGGLE COMPLETE ────────────────────────────────────────
  function toggleTask(id) {
    // .find() returns the first item that matches the condition
    const task = tasks.find(t => t.id === id);
    if (task) task.done = !task.done; // flip the boolean
    render();
  }

  // ── 8. DELETE TASK ────────────────────────────────────────────
  function deleteTask(id, cardEl) {
    // Add the CSS class that triggers the slide-out animation
    cardEl.classList.add('removing');

    // Wait for the animation to finish, THEN remove from the array
    // setTimeout delays code execution — like a timer
    setTimeout(() => {
      // .filter() creates a NEW array without the deleted task
      tasks = tasks.filter(t => t.id !== id);
      render();
    }, 280);
  }

  // ── 9. EVENT LISTENERS ────────────────────────────────────────
  // addEventListener connects a function to a user action (event).

  // "click" on the Add button
  addBtn.addEventListener('click', addTask);

  // "keydown" on the text input — detect Enter key
  taskInput.addEventListener('keydown', (event) => {
    // event.key tells us which key was pressed
    if (event.key === 'Enter') addTask();
  });

  // ── Event delegation on the task list ──
  // Instead of adding listeners to every card, we add ONE listener
  // to the parent (#task-list) and check event.target to know
  // which button was clicked. This is called "event delegation".
  taskList.addEventListener('click', (event) => {
    // .closest() walks up the DOM tree to find a matching ancestor
    const card       = event.target.closest('.task-card');
    const deleteBtn  = event.target.closest('.delete-btn');
    const completeBtn= event.target.closest('.complete-btn');

    if (!card) return; // click was outside a card
    const id = card.dataset.id; // read the data-id attribute we set earlier

    if (deleteBtn)   deleteTask(id, card);
    if (completeBtn) toggleTask(id);
  });

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove 'active' from all buttons, add it to the clicked one
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  // ── 10. SHAKE ANIMATION (for empty input) ─────────────────────
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-6px); }
      40%       { transform: translateX(6px); }
      60%       { transform: translateX(-4px); }
      80%       { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(shakeStyle);

  // ── 11. INITIAL RENDER ────────────────────────────────────────
  // Call render() once on page load to display the default tasks
  render();
