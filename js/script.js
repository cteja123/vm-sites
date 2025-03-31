document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");
    const currentPage = window.location.pathname.split("/").pop(); // Get current page name
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});

function bookanappointment()
{
    let first_name = document.getElementById("first_name").value;
    let company = document.getElementById("company").value;
    let email = document.getElementById("email").value;
    let country_name = document.getElementById("country_name").value;
    let city_name = document.getElementById("city_name").value;

    if(first_name === "" || first_name === undefined)
    {
        document.getElementById("error_first_name").style.display = "block";
    }

    if(company === "" || company === undefined)
    {
        document.getElementById("error_company").style.display = "block";

    }

    if(email === "" || email === undefined)
    {
        document.getElementById("error_email").style.display = "block";

    }

    if(country_name === "" || country_name === undefined)
    {
        document.getElementById("error_country").style.display = "block";

    }

    if(city_name === "" || city_name === undefined)
    {
        document.getElementById("error_city").style.display = "block";

    }

    if(first_name!="" && company!="" && email!="" && country_name!="" && city_name!="")
    {
        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Form Submitted"
        }).then(()=>{
            document.getElementById("appointment").reset();
            window.location.reload();
        });
    }
} 