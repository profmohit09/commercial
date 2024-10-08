
function finding_linkFun() {
    const links = [
        { link: 'floodsolutionsconsult@landmark.co.uk', value: 'mailto:mailfloodsolutionsconsult@landmark.co.uk' },
        { link: 'https://www.bgs.ac.uk/news/six-ways-to-prepare-your-home-for-climate-change-related-subsidence/', value: 'https://www.bgs.ac.uk/news/six-ways-to-prepare-your-home-for-climate-change-related-subsidence/' },
        { link: 'http://link.org', value: 'http://link.org' },
        { link: 'https://environment.maps.arcgis.com/apps/webappviewer/index.html?id=9cef4a084bbb4954b970cd35b099d94c', value: 'https://environment.maps.arcgis.com/apps/webappviewer/index.html?id=9cef4a084bbb4954b970cd35b099d94c'}
    ];

    const numbers = [
        { number: '0330 036 6115' }
    ];

    const specialCharacters = [
        { char: '�', hexCode: '&#163;' }
    ];

    function replaceLinksAndNumbersInDiv(htmlContent, links, numbers, specialCharacters) {
        links.forEach(linkObj => {
            const regex = new RegExp(linkObj.link.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            htmlContent = htmlContent.replace(regex, `<a class="ci-emailid" href="${linkObj.value}">${linkObj.link}</a>`);
        });

        numbers.forEach(numberObj => {
            const regex = new RegExp(numberObj.number.replace(/ /g, '\\s'), 'g');
            htmlContent = htmlContent.replace(regex, `<b>${numberObj.number}</b>`);
        });

        specialCharacters.forEach(charObj => {
            const regex = new RegExp(charObj.char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            htmlContent = htmlContent.replace(regex, `<span>${charObj.hexCode}</span>`);
        });

        return htmlContent;
    }

    const divContent = document.getElementById('finding_link').innerHTML;
    const replacedContent = replaceLinksAndNumbersInDiv(divContent, links, numbers, specialCharacters);
    document.getElementById('finding_link').innerHTML = replacedContent;
}


finding_linkFun()

function updateCurrentYear() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    // Get all span elements with class "current_year"
    var elements = document.getElementsByClassName("current_year");
    // Loop through each element and update its content
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = currentYear;
    }
}

// Call the function to update the current year when the page loads
window.onload = function() {
    updateCurrentYear();
};


var myChartToday;
var myChart2050;
var myChartDAToday;
var myChartDA2030;
var myChartDA2050;
var myChartDA2080;


// Function to create pie chart for today
function hwpiechartFunToday() {
    var low_data = Number(document.getElementById('hw-today-low').textContent);
    var medium_data = Number(document.getElementById('hw-today-medium').textContent);
    var high_data = Number(document.getElementById('hw-today-high').textContent);
    var remaining_data = 100 - (low_data + medium_data + high_data);

    var data = [low_data, medium_data, high_data, remaining_data];

    // Destroy the existing chart if it exists
    if (myChartToday) {
        myChartToday.destroy();
    }

    myChartToday = new Chart(document.querySelector('#myPieChart').getContext("2d"), {
        type: 'pie',
        data: {
            datasets: [{
                label: 'Clusters distribution',
                data: data,
                backgroundColor: ['rgb(255,193,7)', 'rgb(255,120,0)', 'rgb(227,23,56)', 'rgba(255,255,255,0.25)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                onComplete: function (animation) {
                    var imageUrl = myChartToday.toBase64Image();
                    var existingImg = document.getElementById('chartImage');

                    // If image already exists, update its source, else create a new one
                    if (existingImg) {
                        existingImg.src = imageUrl;
                    } else {
                        var img = document.createElement('img');
                        img.id = 'chartImage';
                        img.src = imageUrl;
                        img.width = 217; // Specify the width of the image
                        img.height = 217; // Specify the height of the image
                        img.style.margin = 'auto';
                        document.getElementById('chartContainer').appendChild(img);
                    }

                    // Hide the canvas after generating the image
                    document.getElementById('myPieChart').style.display = 'none';
                }
            }
        }
    });
}

// Function to create pie chart for 2050
function hwpiechartFun2050() {
    var low_data = Number(document.getElementById('hw-2050-low').textContent);
    var medium_data = Number(document.getElementById('hw-2050-medium').textContent);
    var high_data = Number(document.getElementById('hw-2050-high').textContent);
    var remaining_data = 100 - (low_data + medium_data + high_data);

    var data = [low_data, medium_data, high_data, remaining_data];

    // Destroy the existing chart if it exists
    if (myChart2050) {
        myChart2050.destroy();
    }

    myChart2050 = new Chart(document.querySelector('#myPieChart2050').getContext("2d"), {
        type: 'pie',
        data: {
            datasets: [{
                label: 'Clusters distribution',
                data: data,
                backgroundColor: ['rgb(255,193,7)', 'rgb(255,120,0)', 'rgb(227,23,56)', 'rgba(255,255,255,0.25)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                onComplete: function (animation) {
                    var imageUrl = myChart2050.toBase64Image();
                    var existingImg = document.getElementById('chartImage2050');

                    // If image already exists, update its source, else create a new one
                    if (existingImg) {
                        existingImg.src = imageUrl;
                    } else {
                        var img = document.createElement('img');
                        img.id = 'chartImage2050';
                        img.src = imageUrl;
                        img.width = 217; // Specify the width of the image
                        img.height = 217; // Specify the height of the image
                        img.style.margin = 'auto';
                        document.getElementById('chartContainer2050').appendChild(img);
                    }

                    // Hide the canvas after generating the image
                    document.getElementById('myPieChart2050').style.display = 'none';
                }
            }
        }
    });
}

function hwbarchart() {

    var bar_low_today = Number(document.getElementById('bar-low-today').textContent)
    var bar_low_2050 = Number(document.getElementById('bar-low-2050').textContent)

    var bar_medium_today = Number(document.getElementById('bar-medium-today').textContent)
    var bar_medium_2050 = Number(document.getElementById('bar-medium-2050').textContent)

    var bar_high_today = Number(document.getElementById('bar-high-today').textContent)
    var bar_high_2050 = Number(document.getElementById('bar-high-2050').textContent)

    var data = {
        labels: ['Today', '2050'],
        datasets: [
            { data: [bar_low_today, bar_low_2050], backgroundColor: 'rgb(255, 193, 7)', stack: 'stack 1', barThickness: 25, barPercentage: 0.5, categoryPercentage: 0.8 },
            { data: [bar_medium_today, bar_medium_2050], backgroundColor: 'rgb(255, 120, 0)', stack: 'stack 1', barThickness: 25, barPercentage: 0.5, categoryPercentage: 0.8 },
            { data: [bar_high_today, bar_high_2050], backgroundColor: 'rgb(227, 23, 56)', stack: 'stack 1', barThickness: 25, barPercentage: 0.5, categoryPercentage: 0.8 }
        ]
    };

    var options = {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                border: {
                    display: false,
                    dash: [6, 6]
                },
                grid: {
                    color: '#DEDEDE'
                }
            },
            y: {
                border: {
                    display: false,

                },
                grid: {
                    display: false // Hide vertical grid lines
                }
            }
        },
        plugins: {
            legend: { display: false }
        },
        animation: {
            onComplete: function (animation) {
                var imageUrl = myChart.toBase64Image();
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = 662; // Specify the width of the image
                img.height = 200; // Specify the height of the image
                document.getElementById('barChartContainer').appendChild(img);
                // Hide the canvas after generating the image
                document.getElementById('barChart').style.display = 'none';
            }
        }
    };

    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function updateCoverPageLinks(anchorTagSelector, coverPageSelector, footerPageSelector, prefix) {
    let coverPage = document.querySelector(coverPageSelector);
    if (!coverPage) return;
    let anchorTags = coverPage.querySelectorAll(anchorTagSelector);
    for (let i = 0; i < anchorTags.length; i++) {
        let anchor = anchorTags[i];
        let pageId = anchor.getAttribute('href');
        let page = document.querySelector(pageId);
        if (page) {

            let position = Array.from(page.parentElement.children).indexOf(page) + 1;
            let pageNumber = position < 10 ? '0' + position : position;
            const pageNoDiv = page.querySelector(footerPageSelector);
            pageNoDiv.textContent = pageNumber;
            anchor.textContent = (prefix || "") + position;
            let nextPage = page.nextElementSibling;
            while (nextPage && nextPage.id !== anchorTags[i + 1]?.getAttribute('href').replace("#", "")) {
                let nextPagePosition = Array.from(nextPage.parentElement.children).indexOf(nextPage) + 1;
                let nextPageNumber = nextPagePosition < 10 ? '0' + nextPagePosition : nextPagePosition;
                const nextPageNoDiv = nextPage.querySelector(footerPageSelector);
                if (nextPageNoDiv) {
                    nextPageNoDiv.textContent = nextPageNumber;
                }
                nextPage = nextPage.nextElementSibling;
            }
        }
    }
}

function addTableHeader(containerSelector, rowSelector, tableDOMSelector, headerDOMSelector, startOffset = 0, defaultOffset = 0) {

    if (!(containerSelector && rowSelector && tableDOMSelector && headerDOMSelector)) return;

    const tableDOM = document.querySelector(tableDOMSelector);
    if (!tableDOM) return;

    const headerDOM = document.querySelector(headerDOMSelector);
    if (!headerDOM) return;

    const containerHeight = document.querySelector(containerSelector)?.clientHeight;

    if (!containerHeight) return;

    const tableRowsElements = document.querySelectorAll(rowSelector);

    const tableRowsArr = Array.from(tableRowsElements);

    if (!tableRowsArr.length) return;

    let columnCtr = 1;
    let currentHeight = 0;

    for (let i = 0; i < tableRowsArr.length; i++) {
        let offset = defaultOffset;

        if (columnCtr == 1 && startOffset) {
            offset = startOffset;
        }
        const currentRow = tableRowsArr[i];
        const currentRowHeight = currentRow.clientHeight;
        const currentTableHeight = currentHeight + currentRowHeight;
        if (containerHeight - offset - currentTableHeight < 0) {

            tableDOM.insertBefore(headerDOM.cloneNode(true), currentRow);
            currentHeight = 0;
            columnCtr++;
            i--;
        } else {
            currentHeight += currentRowHeight;
        }
    }
}


setTimeout(() => {
    addTableHeader(".ep-DA-content", ".epc-data-row-block", "#ep-DA-table-container", ".epc-DA-tableheading-left", 120, 80);
}, 200)

function createPages(classNames, offset, pageSelector) {
    let pageDiv = document.querySelector(pageSelector);
    if (!pageDiv) return;

    let pageParentDiv = pageDiv.parentNode;
    let parentContainer = pageDiv.querySelector(classNames.parentContainer);
    if (!parentContainer) return;

    let totalHeight = parentContainer.scrollHeight;
    let lastPageContainer;

    function createPage(i, headerClone, titleClone, footerClone, contentWidth, offset, scrollWidth) {
        let pageContainer = document.createElement('div');
        if (i === 0) {
            pageContainer.id = pageSelector.replace("#", '');
        } else {
            pageContainer.id = pageSelector + (i + 1);
        }
        pageContainer.classList.add(...classNames.pageClasses);

        let innerCover = document.createElement('div');
        innerCover.classList.add(...classNames.innerCoverClasses);
        let startScrollWidth = i * (contentWidth + offset);
        let endScrollWidth = (i + 1) * contentWidth;
        let clonedContent = parentContainer.cloneNode(true);
        innerCover.appendChild(clonedContent);
        pageContainer.appendChild(headerClone.cloneNode(true));
        pageContainer.appendChild(titleClone.cloneNode(true));
        pageContainer.appendChild(innerCover);
        pageContainer.appendChild(footerClone.cloneNode(true));

        if (lastPageContainer) {
            pageParentDiv.insertBefore(pageContainer, lastPageContainer.nextSibling);
        } else {
            pageParentDiv.insertBefore(pageContainer, pageDiv.nextSibling);
            pageParentDiv.removeChild(pageDiv);
        }
        lastPageContainer = pageContainer;
        clonedContent.style.overflow = 'hidden';
        clonedContent.style.width = contentWidth + "px";
        clonedContent.scrollLeft = startScrollWidth === 0 ? 0 : startScrollWidth;
        if (endScrollWidth > scrollWidth) {
            var innerContent = document.createElement('div');
            innerContent.style.width = (contentWidth) + 'px';
            innerContent.style.height = '1px';
            clonedContent.appendChild(innerContent);
            clonedContent.style.width = contentWidth + "px";
            clonedContent.scrollLeft = startScrollWidth === 0 ? 0 : startScrollWidth;
        } else {
            clonedContent.style.width = contentWidth + "px";
            clonedContent.scrollLeft = startScrollWidth === 0 ? 0 : startScrollWidth;
        }
    }

    let header = pageDiv.querySelector(classNames.header);
    let title = pageDiv.querySelector(classNames.title);
    let footer = pageDiv.querySelector(classNames.footer);
    let contentWidth = parentContainer.clientWidth;
    let scrollWidth = parentContainer.scrollWidth;
    let totalPages = Math.ceil((scrollWidth) / (contentWidth + offset));
    let headerClone = header.cloneNode(true);
    let titleClone = title.cloneNode(true);
    let footerClone = footer.cloneNode(true);

    for (let i = 0; i < totalPages; i++) {
        createPage(i, headerClone, titleClone, footerClone, contentWidth, offset, scrollWidth);
    }
}

let recommendationClassnames = {
    parentContainer: '.parentcontainer',
    header: '.page-header',
    title: '.page_title_holder',
    footer: '.cover_page_inner_footer',
    pageClasses: ['page-summ-recomendation', 'bg-grey'],
    innerCoverClasses: ['inner-cover-summ-recomm-bg']
};

let coastalClassnames = {
    parentContainer: '.parentcontainerCoastal',
    header: '.page-header',
    title: '.page-title-block',
    footer: '.cover_page_inner_footer',
    pageClasses: ['page-DA'],
    innerCoverClasses: ['inner-cover-summ-recomm-bg']
};

let energyperformanceClassnames = {
    parentContainer: '.ep-DA-content',
    header: '.page-header',
    title: '.page-title-block',
    footer: '.cover_page_inner_footer',
    pageClasses: ['page-DA'],
    innerCoverClasses: ['ep-DA-info']
};

let recommendationOffset = 100;
let coastalOffset = 80;
let energyperformnaceOffset = 100;

setTimeout(() => {
    const dynamicBasePageId = '#summary_and_recommendations';
    createPages(recommendationClassnames, recommendationOffset, dynamicBasePageId);

    const dynamicCoastalPageId = '#coastal_erosion_table_DA';
    createPages(coastalClassnames, coastalOffset, dynamicCoastalPageId);

    const dynamicenergyperformancePageId = '#energy_performance_DA';
    createPages(energyperformanceClassnames, energyperformnaceOffset, dynamicenergyperformancePageId);

    const coverPageSelector = ".page.cover";
    const anchorSelector = ".section-page-number";
    const footerPageSelector = ".cover_footer_page_number";
    updateCoverPageLinks(anchorSelector, coverPageSelector, footerPageSelector, "Page ");

    const coverPageDASelector = "#cover_page_DA";
    const anchorDASelector = ".da-pagenumber";
    updateCoverPageLinks(anchorDASelector, coverPageDASelector, footerPageSelector);

    const coverPageAppendicesSelector = "#cover_page_appendices";
    const anchorAppendicesSelector = ".da-pagenumber";
    updateCoverPageLinks(anchorAppendicesSelector, coverPageAppendicesSelector, footerPageSelector);
}, 500);





// function ep_DA_table() {

//     var epcTableContainer = document.getElementById('ep-DA-table-container');
//     var epcTableHeading = document.getElementById('epc-DA-tableheading');
//     var minHeightToShow = 717;

//     if (epcTableContainer.offsetHeight > minHeightToShow) {
//         epcTableHeading.style.display = 'block';
//     } else {
//         epcTableHeading.style.display = 'none';
//     }

// }

// ep_DA_table()
// Heat stress DA

function heatstressDApie_today() {
    var low_data = Number(document.getElementById('hw-DA-today-low').textContent)
    var medium_data = Number(document.getElementById('hw-DA-today-medium').textContent)
    var high_data = Number(document.getElementById('hw-DA-today-high').textContent)
    var remaining_data = 100 - (low_data + medium_data + high_data)

    var labels = ["Red", "Blue", "Yellow", "Green"];
    var data = [low_data, medium_data, high_data, remaining_data];

    if (myChartDAToday) {
        myChartDAToday.destroy();
    }

    myChartDAToday = new Chart(document.querySelector('#myPieChartDAToday').getContext("2d"), {
        type: 'pie',
        data: {

            datasets: [{
                label: 'Clusters distribution',
                data: data,
                backgroundColor: ['rgb(255,193,7)', 'rgb(255,120,0)', 'rgb(227,23,56)', 'rgb(232, 232, 232)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                onComplete: function (animation) {
                    var imageUrl = myChartDAToday.toBase64Image();
                    var img = document.createElement('img');
                    img.src = imageUrl;
                    img.width = 210; // Specify the width of the image
                    img.height = 210; // Specify the height of the image
                    img.style.margin = 'auto';
                    document.getElementById('chartContainerDAToday').appendChild(img);
                    // Hide the canvas after generating the image
                    document.getElementById('myPieChartDAToday').style.display = 'none';
                }
            }
        }
    });
}

function heatstressDApie_2030() {
    var low_data = Number(document.getElementById('hw-DA-2030-low').textContent)
    var medium_data = Number(document.getElementById('hw-DA-2030-medium').textContent)
    var high_data = Number(document.getElementById('hw-DA-2030-high').textContent)
    var remaining_data = 100 - (low_data + medium_data + high_data)

    var labels = ["Red", "Blue", "Yellow", "Green"];
    var data = [low_data, medium_data, high_data, remaining_data];

    if (myChartDA2030) {
        myChartDA2030.destroy();
    }

    myChartDA2030 = new Chart(document.querySelector('#myPieChartDA2030').getContext("2d"), {
        type: 'pie',
        data: {

            datasets: [{
                label: 'Clusters distribution',
                data: data,
                backgroundColor: ['rgb(255,193,7)', 'rgb(255,120,0)', 'rgb(227,23,56)', 'rgb(232, 232, 232)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                onComplete: function (animation) {
                    var imageUrl = myChartDA2030.toBase64Image();
                    var img = document.createElement('img');
                    img.src = imageUrl;
                    img.width = 210; // Specify the width of the image
                    img.height = 210; // Specify the height of the image
                    img.style.margin = 'auto';
                    document.getElementById('chartContainerDA2030').appendChild(img);
                    // Hide the canvas after generating the image
                    document.getElementById('myPieChartDA2030').style.display = 'none';
                }
            }
        }
    });
}

function heatstressDApie_2050() {
    var low_data = Number(document.getElementById('hw-DA-2050-low').textContent)
    var medium_data = Number(document.getElementById('hw-DA-2050-medium').textContent)
    var high_data = Number(document.getElementById('hw-DA-2050-high').textContent)
    var remaining_data = 100 - (low_data + medium_data + high_data)

    var labels = ["Red", "Blue", "Yellow", "Green"];
    var data = [low_data, medium_data, high_data, remaining_data];

    if (myChartDA2050) {
        myChartDA2050.destroy();
    }

    myChartDA2050 = new Chart(document.querySelector('#myPieChartDA2050').getContext("2d"), {
        type: 'pie',
        data: {

            datasets: [{
                label: 'Clusters distribution',
                data: data,
                backgroundColor: ['rgb(255,193,7)', 'rgb(255,120,0)', 'rgb(227,23,56)', 'rgb(232, 232, 232)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                onComplete: function (animation) {
                    var imageUrl = myChartDA2050.toBase64Image();
                    var img = document.createElement('img');
                    img.src = imageUrl;
                    img.width = 210; // Specify the width of the image
                    img.height = 210; // Specify the height of the image
                    img.style.margin = 'auto';
                    document.getElementById('chartContainerDA2050').appendChild(img);
                    // Hide the canvas after generating the image
                    document.getElementById('myPieChartDA2050').style.display = 'none';
                }
            }
        }
    });
}

function heatstressDApie_2080() {
    var low_data = Number(document.getElementById('hw-DA-2080-low').textContent)
    var medium_data = Number(document.getElementById('hw-DA-2080-medium').textContent)
    var high_data = Number(document.getElementById('hw-DA-2080-high').textContent)
    var remaining_data = 100 - (low_data + medium_data + high_data)

    var labels = ["Red", "Blue", "Yellow", "Green"];
    var data = [low_data, medium_data, high_data, remaining_data];

    if (myChartDA2080) {
        myChartDA2080.destroy();
    }

    myChartDA2080 = new Chart(document.querySelector('#myPieChartDA2080').getContext("2d"), {
        type: 'pie',
        data: {

            datasets: [{
                label: 'Clusters distribution',
                data: data,
                backgroundColor: ['rgb(255,193,7)', 'rgb(255,120,0)', 'rgb(227,23,56)', 'rgb(232, 232, 232)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                onComplete: function (animation) {
                    var imageUrl = myChartDA2080.toBase64Image();
                    var img = document.createElement('img');
                    img.src = imageUrl;
                    img.width = 210; // Specify the width of the image
                    img.height = 210; // Specify the height of the image
                    img.style.margin = 'auto';
                    document.getElementById('chartContainerDA2080').appendChild(img);
                    // Hide the canvas after generating the image
                    document.getElementById('myPieChartDA2080').style.display = 'none';
                }
            }
        }
    });
}

// Event listener for window resize
window.addEventListener('resize', function () {
    // Clear the existing charts on window resize
    if (myChartToday) {
        myChartToday.destroy();
    }
    if (myChart2050) {
        myChart2050.destroy();
    }
    if (myChartDAToday) {
        myChartDAToday.destroy();
    }
    if (myChartDA2030) {
        myChartDA2030.destroy();
    }
    if (myChartDA2050) {
        myChartDA2050.destroy();
    }
    if (myChartDA2080) {
        myChartDA2080.destroy();
    }
});


hwpiechartFunToday()
hwpiechartFun2050()
hwbarchart()

heatstressDApie_today()
heatstressDApie_2030()
heatstressDApie_2050()
heatstressDApie_2080()

