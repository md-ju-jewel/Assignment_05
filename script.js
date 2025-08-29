const callButtons = document.querySelectorAll("#call-btn");
callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest("#card");
    const title = card.querySelector("#title").innerText;
    const number = card.querySelector("#number").innerText;

    let coin = document.getElementById("coin").innerText;

    if (coin == 0) {
      alert("❌ You don't have enough coin");
    } else {
      document.getElementById("coin").innerText =
        document.getElementById("coin").innerText - 20;
      const historyContainer = document.getElementById("history-container");
      const card = document.createElement("div");
      card.className =
        "bg-gray-100 mt-2 p-4 rounded-md flex justify-between items-center";

      card.innerHTML = `
        <div>
          <h1 class="text-[14px] font-semibold">${title}</h1>
          <p class="text-[14px] text-[#5C5C5C]">${number}</p>
        </div>
        <p class="text-[14px]">${new Date().toLocaleTimeString("en-US", {
          our12: true,
        })}</p>
      `;
      historyContainer.appendChild(card);
      alert(`📞 Calling ${title}  ${number}...`);
    }
  });
});
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});
const heartButtons = document.querySelectorAll("#heart-btn");
heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("heart-count").innerText++;
  });
});

const copyButtons = document.querySelectorAll("#copy-btn");
copyButtons.forEach((btn) => {
  btn.addEventListener("click", async function () {
    document.getElementById("copy-count").innerText++;
    const card = this.closest("#card");
    const numberText = card.querySelector("#number").innerText.trim();

    try {
      await navigator.clipboard.writeText(numberText);
      alert(`Number copied: ${numberText}`);
    } catch (err) {
      console.error("Copy failed", err);
    }
  });
});
