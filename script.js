// empty array
let interviewJobsCount = [];
let rejectedJobsCount = [];

//3 section
let sectionFirst = document.getElementById("section-first");
let sectionSecond = document.getElementById("section-second");
let filterEmptySection = document.getElementById("empty-section");

//parent and availableJobs
let allJobs = document.getElementById("all-jobs");
let availableJobs = document.getElementById("available-jobs");

//card
let totalJobs = document.getElementById("total-job");
let interviewJobs = document.getElementById("interview-job");
let rejectedJobs = document.getElementById("rejected-job");

// btn
let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectedBtn = document.getElementById("rejected-btn");

// koto gula jobs ache seta
function jobCount() {
  totalJobs.innerText = allJobs.children.length;

  // available jobs = all jobs - (interview + rejected)
  availableJobs.innerText =
    allJobs.children.length -
    (interviewJobsCount.length + rejectedJobsCount.length);

  interviewJobs.innerText = interviewJobsCount.length;
  rejectedJobs.innerText = rejectedJobsCount.length;
}
jobCount();

// update page
function updateUI() {
  jobCount();

  sectionSecond.classList.add("hidden");
  filterEmptySection.classList.add("hidden");
  allJobs.classList.add("hidden");

  if (allBtn.classList.contains("btn-primary")) {
    allJobs.classList.remove("hidden");
  } else if (interviewBtn.classList.contains("btn-primary")) {
    if (interviewJobsCount.length === 0) {
      sectionSecond.classList.remove("hidden"); // blank show
    } else {
      filterEmptySection.classList.remove("hidden");
      renderingInterview();
    }
  } else if (rejectedBtn.classList.contains("btn-primary")) {
    if (rejectedJobsCount.length === 0) {
      sectionSecond.classList.remove("hidden"); // blank show
    } else {
      filterEmptySection.classList.remove("hidden");
      renderingRejected();
    }
  }
}

// toggle btn
function toggleBtn(id) {
  //remove
  allBtn.classList.remove("btn-primary", "text-gray-200");
  interviewBtn.classList.remove("btn-primary", "text-gray-200");
  rejectedBtn.classList.remove("btn-primary", "text-gray-200");

  //add
  allBtn.classList.add("btn-soft", "bg-white", "text-gray-500");
  interviewBtn.classList.add("btn-soft", "bg-white", "text-gray-500");
  rejectedBtn.classList.add("btn-soft", "bg-white", "text-gray-500");

  //specific btn click
  let selected = document.getElementById(id);
  selected.classList.remove("btn-soft", "bg-white", "text-gray-500");
  selected.classList.add("btn-primary", "text-gray-200");

  updateUI();

  // interview add
  if (id === "interview-btn") {
    allJobs.classList.add("hidden");
    filterEmptySection.classList.remove("hidden");
    renderingInterview();
  } else if (id === "all-btn") {
    allJobs.classList.remove("hidden");
    filterEmptySection.classList.add("hidden");
  } else if (id === "rejected-btn") {
    allJobs.classList.add("hidden");
    filterEmptySection.classList.remove("hidden");
    renderingRejected();
  }
}
//even listener for interview
sectionFirst.addEventListener("click", (e) => {
  //for interviewBtn
  if (e.target.classList.contains("interviewBtn2")) {
    let parentNode = e.target.parentNode.parentNode.parentNode;
    console.log(parentNode);

    let headerTitle = parentNode.querySelector(".header-title").innerText;
    let cardPara = parentNode.querySelector(".card-para").innerText;
    let cardParaTime = parentNode.querySelector(".card-para-time").innerText;
    let statusPara = parentNode.querySelector(".status-btn").innerText;
    let notes = parentNode.querySelector(".card-note").innerText;

    const cardItems = {
      headerTitle,
      cardPara,
      cardParaTime,
      statusPara,
      notes,
    };

    const interviewExist = interviewJobsCount.find(
      (item) => item.headerTitle === cardItems.headerTitle,
    );

    //remove duplicate
    rejectedJobsCount = rejectedJobsCount.filter(
      (item) => item.headerTitle !== cardItems.headerTitle,
    );

    if (!interviewExist) {
      interviewJobsCount.push(cardItems);
    }
    updateUI();

    parentNode.querySelector(".status-btn").innerText = "APPLIED";
  }
  //for rejectedBtn
  else if (e.target.classList.contains("rejectedBtn2")) {
    let parentNode = e.target.parentNode.parentNode;

    let headerTitle = parentNode.querySelector(".header-title").innerText;
    let cardPara = parentNode.querySelector(".card-para").innerText;
    let cardParaTime = parentNode.querySelector(".card-para-time").innerText;
    let statusPara = parentNode.querySelector(".status-btn").innerText;
    let notes = parentNode.querySelector(".card-note").innerText;

    const rejectedCardItems = {
      headerTitle,
      cardPara,
      cardParaTime,
      statusPara,
      notes,
    };

    const rejectedExist = rejectedJobsCount.find(
      (item) => item.headerTitle === rejectedCardItems.headerTitle,
    );
    //remove duplicate card
    interviewJobsCount = interviewJobsCount.filter(
      (item) => item.headerTitle !== rejectedCardItems.headerTitle,
    );

    if (!rejectedExist) {
      rejectedJobsCount.push(rejectedCardItems);
    }
    updateUI();

    parentNode.querySelector(".status-btn").innerText = "REJECTED";
  }
  // delete btn
  else if (e.target.classList.contains("fa-trash-can")) {
    const cardDiv = e.target.parentNode.parentNode;
    if (!cardDiv) return;

    let title = "";
    if (cardDiv.querySelector(".header-title")) {
      title = cardDiv.querySelector(".header-title").innerText;
    }

    // array remove
    interviewJobsCount = interviewJobsCount.filter(
      (item) => item.headerTitle !== title,
    );
    rejectedJobsCount = rejectedJobsCount.filter(
      (item) => item.headerTitle !== title,
    );

    // remove
    cardDiv.remove();

    // UI update
    updateUI();
  }
});

// filter section interview
function renderingInterview() {
  filterEmptySection.innerHTML = "";
  //for interview
  for (const interview of interviewJobsCount) {
    const div = document.createElement("div");

    div.className =
      "flex gap-4 lg:gap-0 justify-between items-start p-6 border-l-6 border-l-transparent rounded-xl bg-white hover:-translate-y-0.5 hover:shadow hover:border-l-6 hover:border-l-green-500 hover:rounded-tl-none hover:rounded-bl-none transition-all duration-300 ease-in-out mb-6";

    div.innerHTML = `
            <div class="">
              <h4 class="header-title text-[18px] font-semibold">
                ${interview.headerTitle}
              </h4>
              <p class="card-para text-gray-500 font-medium mb-5">
                ${interview.cardPara}
              </p>

              <p class="card-para-time text-gray-500 font-medium mb-5">
                ${interview.cardParaTime}
              </p>

              <button class="status-btn btn btn-soft mb-2">APPLIED</button>

              <p class="card-note text-gray-800 mb-5">
                ${interview.notes}
              </p>
              <!-- btn-group -->
              <div class="space-x-2">
                <button
                  id="interview-btn-2"
                  class="interviewBtn2 btn btn-outline btn-success"
                >
                  INTERVIEWED
                </button>
                <button
                  id="rejected-btn-2"
                  class="rejectedBtn2 btn btn-outline btn-error"
                >
                  REJECTED
                </button>
              </div>
            </div>

            <!-- DELETE -->
            <div
              class="py-2 px-3 rounded-full border border-gray-300 hover:bg-gray-200 active:translate-y-0.5"
            >
              <i class="fa-regular fa-trash-can"></i>
            </div>
          </div>
      `;

    filterEmptySection.appendChild(div);
  }
}

// filter section rejected
function renderingRejected() {
  filterEmptySection.innerHTML = "";
  //for rejected
  for (const rejected of rejectedJobsCount) {
    const div = document.createElement("div");

    div.className =
      "flex gap-4 lg:gap-0 justify-between items-start p-6 border-l-6 border-l-transparent rounded-xl bg-white hover:-translate-y-0.5 hover:shadow hover:border-l-6 hover:border-l-green-500 hover:rounded-tl-none hover:rounded-bl-none transition-all duration-300 ease-in-out mb-6";

    div.innerHTML = `
            <div class="">
              <h4 class="header-title text-[18px] font-semibold">
                ${rejected.headerTitle}
              </h4>
              <p class="card-para text-gray-500 font-medium mb-5">
                ${rejected.cardPara}
              </p>

              <p class="card-para-time text-gray-500 font-medium mb-5">
                ${rejected.cardParaTime}
              </p>

              <button class="status-btn btn btn-soft mb-2">REJECTED</button>

              <p class="card-note text-gray-800 mb-5">
                ${rejected.notes}
              </p>
              <!-- btn-group -->
              <div class="space-x-2">
                <button
                  id="interview-btn-2"
                  class="interviewBtn2 btn btn-outline btn-success"
                >
                  INTERVIEW
                </button>
                <button
                  id="rejected-btn-2"
                  class="rejectedBtn2 btn btn-outline btn-error"
                >
                  REJECTED
                </button>
              </div>
            </div>

            <!-- DELETE -->
            <div
              class="py-2 px-3 rounded-full border border-gray-300 hover:bg-gray-200 active:translate-y-0.5"
            >
              <i class="fa-regular fa-trash-can"></i>
            </div>
          </div>
      `;

    filterEmptySection.appendChild(div);
  }
}
