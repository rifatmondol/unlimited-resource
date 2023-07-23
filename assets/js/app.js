
const inputBox1 = document.querySelector(".range-slider input.slider1");
const slider_thumb1 = document.querySelector(".slider-thumb1");
const progress_bar1 = document.querySelector(".progress-bar1");

const inputBox2 = document.querySelector(".range-slider input.slider2");
const slider_thumb2 = document.querySelector(".slider-thumb2");
const progress_bar2 = document.querySelector(".progress-bar2");

inputBox1.addEventListener('input', customRangeSlider1);
inputBox2.addEventListener('input', customRangeSlider2);

function customRangeSlider1() {
    const value = (inputBox1.value / inputBox1.max) * 100 + "%";
    progress_bar1.style.width = value;
    slider_thumb1.style.cssText = `left:${value}; transform:translate(-${value},-50%)`;
}
function customRangeSlider2() {
    const value = (inputBox2.value / inputBox2.max) * 100 + "%";
    progress_bar2.style.width = value;
    slider_thumb2.style.cssText = `left:${value}; transform:translate(-${value},-50%)`;
}


function rangeSlide(value) {
    document.getElementById('value').innerHTML = value + "%";
}
function rangeSlide2(value) {
    document.getElementById('value2').innerHTML = value;
}



// chart
const ctx = document.getElementById('myChart');
const customYAxisLabels = ["$0", '', "$100", '', "$200", '', "$300"];

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['20', '', '25', '', '30', '', '35', '', '40', '', '60', '', '65'],
        datasets: [
            {
                label: 'Employer: K 73,500',
                data: [25, 28, 33.33, 38, 45, 50, 58, 65, 72, 83, 92, 97, 106],
                backgroundColor: 'rgb(8 0 163)'

            },
            {
                label: 'Employee: K 52,500',
                data: [25, 28, 33.33, 38, 45, 50, 58, 65, 72, 83, 92, 97, 106],
                backgroundColor: 'rgb(73 53 255)',
            },
            {
                label: 'Total Interest: K 244,313',
                data: [25, 28, 33.33, 38, 45, 50, 58, 65, 72, 83, 92, 97, 106],
                backgroundColor: 'rgb(133 175 255)',
            },
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                },
                offset: true,
                stacked: true
            },
            y: {
                ticks: {
                    // Set your custom Y-axis values and labels
                    values: this.customYAxisValues,
                    callback: function (value, index, values) {
                        return customYAxisLabels[index];
                    },
                },
                border: {
                    display: false
                },
                // grid: {
                //     borderDash: [10, 10],
                // },
                beginAtZero: true,
                stacked: true
            }
        },

    }
});