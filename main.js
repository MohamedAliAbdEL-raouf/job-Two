let usersData;
async function getDataFromApi() {
    fetch('http://localhost:3000/all')
        .then(response => response.json())
        .then(data => {
            usersData = data
            gender();
            nationality();
            console.log(usersData);
            
        })
}
getDataFromApi()
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['ضيق تنفس', 'كحه و سخونيه', 'بدون اعراض', 'فئ و اسهال'],
        datasets: [{
            label: 'الاعداد طبقا للاعراض',
            data: [12, 19, 3, 5,],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        resposive: true
    }
});

const ctxTwo = document.getElementById('bar').getContext('2d');
const bar = new Chart(ctxTwo, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'اعداد المراحل السنيه',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function nationality(){
    const ctxThree = document.getElementById('myChartTwo').getContext('2d');
    const myChartThree = new Chart(ctxThree, {
        type: 'polarArea',
        data: {
            labels: ['مصري', 'عربي', 'اجنبي','اخري'],
            datasets: [{
                label: 'الجنسيه',
                data: [usersData.one, usersData.two, usersData.three,usersData.four],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(200, 206, 90, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(200, 206, 90, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function gender() {
    const ctxFour = document.getElementById('barTwo').getContext('2d');


    const myChartFour = new Chart(ctxFour, {
        type: 'bar',
        data: {
            labels: ['ذكر', 'انثي'],
            datasets: [{
                label: 'الاعداد طبقا للنوع',
                data: [usersData.maleCount, usersData.femaleCount],
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const ctxFive = document.getElementById('myChartThree').getContext('2d');
const myChartFive = new Chart(ctxFive, {
    type: 'doughnut',
    data: {
        labels: ['غير مصري', 'مصري'],
        datasets: [{
            label: 'اعداد طبقا للجنسيه',
            data: [3, 18],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxSix = document.getElementById('barThree').getContext('2d');
const myChartSix = new Chart(ctxSix, {
    type: 'doughnut',
    data: {
        labels: ['طبيب خاص', 'مستشفي خاص', 'مستشفي حكومي'],
        datasets: [{
            label: 'اعداد طبقا لاماكن التشخيص',
            data: [5, 2, 3],
            backgroundColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxseven = document.getElementById('barr').getContext('2d');
const myChartseven = new Chart(ctxseven, {
    type: 'bar',
    data: {
        labels: ['الوادي الجديد', 'المنيا', 'المنوفيه', 'كفر الشيخ', 'مطروح', 'جيزه', ' القاهره'],
        datasets: [{
            label: 'اعداد طبقا لاماكن التشخيص',
            data: [5, 2, 3, 7, 8, 10, 15],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(170, 159, 64, 0.8)',
                'rgba(100, 159, 64, 0.8)',
                'rgba(40, 159, 64, 0.8)',
                'rgba(80, 100, 64, 0.8)',


            ],
            borderColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(170, 159, 64, 0.8)',
                'rgba(100, 159, 64, 0.8)',
                'rgba(40, 159, 64, 0.8)',
                'rgba(80, 100, 64, 0.8)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

