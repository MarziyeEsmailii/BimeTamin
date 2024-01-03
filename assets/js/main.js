/* همه تگ ها را با توجه به نام کلاس انتخاب میکند
 و آنها را در یک متغییر دخیره میکند*/
const tabBtns = document.querySelectorAll(".tab-btn");
const boxs = document.querySelectorAll(".box");
const toggleMenu = document.querySelector(".toggle-menu");
const sidebar = document.querySelector(".sidebar");

/*هنگامی که تگ کلیک می شود، کلاس "فعال" در تگ "نوار کناری" تغییر می کند*/
toggleMenu.addEventListener("click",(e)=>{
	sidebar.classList.toggle("active");
})

tabBtns.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		tabBtns.forEach((tab) => {
			tab.classList.remove("active");
		});
		tab.classList.add("active");
		boxs.forEach((box) => {
			box.classList.remove("active");
		});
		boxs[index].classList.add("active");
	});
});

const ctx = document.getElementById('myChart');
Chart.defaults.font.family = "Yekan Bakh Bold";
const data = [
    { monthly: "فروردین", payment: 13330000 },
    { monthly: "اردیبهشت", payment: 12320000 },
    { monthly: "خرداد", payment: 15120000 },
    { monthly: "تیر", payment: 10400000 },
    { monthly: "مرداد", payment: 14200000 },
    { monthly: "شهریور", payment: 13480000 },
    { monthly: "مهر", payment: 11500000 },
    { monthly: "آبان", payment: 12500000 },
    { monthly: "آذر", payment: 14900000 },
    { monthly: "دی", payment: 13500000 },
    { monthly: "بهمن", payment: 16500000 },
    { monthly: "اسفند", payment: 13500000 },
  ];
new Chart(ctx, {
  type: 'bar',
  data: {
	labels: data.map(row => row.monthly),
	datasets: [{
	  label: 'واریزی حقوق ',
	  data:data.map(row => row.payment),
	  borderWidth: 1
	}]
  },
  options: {
	plugins: {
		subtitle: {
			display: true,
			text: ' نمودار دستمزد دریافتی سال ۱۴۰۲ شرکت جهان گستر'
		}
	},
	scales: {
	  y: {
		beginAtZero: true,
		ticks: {
			callback: function(value, index, values) {
				return value +` ریال `;
			}
		}
	  }
	}
  }
});
