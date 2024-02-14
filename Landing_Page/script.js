document.getElementById('donate-button').addEventListener('click',function()
{
    window.location.href='index.html#donation-section';
});
const data = {
    labels: ['Program Funding', 'Administration Costs', 'Fundraising', 'Outreach and Awareness','Reserves and Contingency'],
    datasets: [{
        data: [35,25,20,10,10], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50','purple'],
    }]
};

// Get the context of the canvas element
const ctx = document.getElementById('myPieChart').getContext('2d');

// Create the pie chart
const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
});