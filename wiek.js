var birthDate = new Date("2006-07-27");

    function getMonthForm(months) {
        if (months === 1) {
            return "miesiąc";
        }
        else if (months > 1 && months < 5) {
            return "miesiące";
        }
        else {
            return "miesięcy";
        }
    }
    
    function calculateAge() {
        var now = new Date();
        var ageYears = now.getFullYear() - birthDate.getFullYear();
        var ageMonths = now.getMonth() - birthDate.getMonth();
        var ageDays = now.getDate() - birthDate.getDate();
      
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths = ageMonths + 12;
        }
    
        if (ageDays < 0) {
            var daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            ageDays = ageDays + daysInLastMonth;
            ageMonths--;
        }
    
        monthForm = getMonthForm(ageMonths);
    
        document.getElementById('age').textContent = `${ageYears} lat, ${ageMonths} ${monthForm} oraz ${ageDays} dni`;
    }
    
    setInterval(calculateAge, 1000);
    
