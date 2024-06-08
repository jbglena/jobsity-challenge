function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Array de objetos con los datos de las filas
var rowData = [
  {
    icon: "check",
    color: "text-success",
    text: "Coffee machine and grinder - practice - types of coffee machines and coffee grinders",
  },
  {
    icon: "check",
    color: "text-success",
    text: "What makes professional coffee machines and coffee grinders.",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "Main components of coffee machines and coffee-Lathes, autolathes. Their purpose",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "How to choose a coffee machine and coffee grinder",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "The structure of the machine. How to maintain, clean and customize coffee machine",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "The structure of the grinders. How to maintain, clean and customize coffee Molko",
  },
  {
    icon: "check",
    color: "text-success",
    text: "Making beverages - praktika- machines and espresso rules",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "Technology and regulations frothed milk",
  },
  { icon: "xmark", color: "text-danger", text: "Terms of tasting coffee" },
  {
    icon: "xmark",
    color: "text-danger",
    text: "Terms of preparation of standard drinks line: espresso, cappuccino, latte and others.",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "Latte Art - Features practice and the importance of Latte Art in business and the barista",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "1 views Latte Art - Pitching",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "2 views Latte Art - topping",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "3 views Latte Art - Etching",
  },
  {
    icon: "xmark",
    color: "text-danger",
    text: "4 views Latte Art - chocolate chip stencils",
  },
];

// Función para generar las filas de la tabla
function generateTableRows() {
  var tbody = document.getElementById("table-body");
  rowData.forEach(function (row) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
                <th scope="row"><i class="fa-solid fa-${row.icon} ${row.color}"></i></th>
                <td>${row.text}</td>
            `;
    tbody.appendChild(tr);
  });
}

generateTableRows();

// navbar
//   document.addEventListener('DOMContentLoaded', (event) => {
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             // Remove active class from all links
//             navLinks.forEach(nav => nav.classList.remove('active'));
//             // Add active class to the clicked link
//             link.classList.add('active');
//         });
//     });
// });
