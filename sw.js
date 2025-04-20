 
        let timer;
        let startTime;
        let elapsedTime = 0;
        let running = false;
       // let lapTime = 0;
        function update() {
            const time = Date.now() - startTime + elapsedTime;
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor(time / 1000 / 60 / 60);
            document.querySelector(".counter").innerText =
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
         // Start, Pause, Reset, Lap
        function startStopwatch() {
            if (!running) {
                startTime = Date.now();
                timer = setInterval(update, 1000);
                running = true;
            }
        }
        //the function to Pause the stopwatch
        function pauseStopwatch() {
            if (running) {
                clearInterval(timer);
                elapsedTime += Date.now() - startTime;
                running = false;
            }
        }
     //the function to Reset the stopwatch
        function resetStopwatch() {
            clearInterval(timer);
            elapsedTime = 0;
            running = false;
            document.querySelector(".counter").innerText = "00:00:00";
            document.getElementById("laps").innerHTML = "";
        }
     //the function to record the lap
        function recordLap() {
            if (running) {
                const lapTime = document.querySelector(".counter").innerText;
                const lapItem = document.createElement("li");
                lapItem.textContent = lapTime;
             // Create a delete button
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "X";
                deleteButton.classList.add("erase-btn");
                deleteButton.onclick = function () {
                    lapItem.remove();
                };
                     // Append the delete button to the lap item
                lapItem.appendChild(deleteButton);
                document.getElementById("laps").appendChild(lapItem);
            }
        }
    