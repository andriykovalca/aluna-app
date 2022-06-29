function storeReading(data) {

    // Checking if value is +10% of average readings
    let avgValue = data.reduce((a, b) => a + b.value, 0) / data.length;
    data.forEach(el => {
        if (el.value > avgValue * 1.1) {
            el.needsCheck = true;
        } else {
            el.needsCheck = false;
        }
    });


    // Sorting readings by date
    data.sort((a, b) => parseFloat(a.created_at) - parseFloat(b.created_at));
        
        
    // Removing dublicate readings
    const uniqueTime = [];
    const filteredData = data.filter(el => {
        const isDuplicate = uniqueTime.includes(el.created_at);
        
        if (!isDuplicate) {
            uniqueTime.push(el.created_at);
        
            return true;
        }
        
        return false;
        });
        
    console.log(filteredData);
    return filteredData;
    
}

module.exports = { storeReading }