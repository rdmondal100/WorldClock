//time zone data  selection
const worldsTimeZone = {
  Afghanistan: "Asia/Kabul",
  Albania: "Europe/Tirane",
  Algeria: "Africa/Algiers",
  Andorra: "Europe/Andorra",
  Angola: "Africa/Luanda",
  "Antigua and Barbuda": "America/Antigua",
  Argentina: "America/Argentina/Buenos_Aires",
  Armenia: "Asia/Yerevan",
  Australia: {
    "Australian Capital Territory": "Australia/Sydney",
    "New South Wales": "Australia/Sydney",
    "Northern Territory": "Australia/Darwin",
    Queensland: "Australia/Brisbane",
    "South Australia": "Australia/Adelaide",
    Tasmania: "Australia/Hobart",
    Victoria: "Australia/Melbourne",
    "Western Australia": "Australia/Perth",
  },
  Austria: "Europe/Vienna",
  Azerbaijan: "Asia/Baku",
  Bahamas: "America/Nassau",
  Bahrain: "Asia/Bahrain",
  Bangladesh: "Asia/Dhaka",
  Barbados: "America/Barbados",
  Belarus: "Europe/Minsk",
  Belgium: "Europe/Brussels",
  Belize: "America/Belize",
  Benin: "Africa/Porto-Novo",
  Bhutan: "Asia/Thimphu",
  Bolivia: "America/La_Paz",
  "Bosnia and Herzegovina": "Europe/Sarajevo",
  Botswana: "Africa/Gaborone",
  Brazil: {
    Acre: "America/Rio_Branco",
    Alagoas: "America/Maceio",
    Amapa: "America/Belem",
    Amazonas: "America/Manaus",
    Bahia: "America/Bahia",
    Ceara: "America/Fortaleza",
    "Distrito Federal": "America/Sao_Paulo",
    "Espirito Santo": "America/Sao_Paulo",
    Goias: "America/Sao_Paulo",
    Maranhao: "America/Fortaleza",
    "Mato Grosso": "America/Cuiaba",
    "Mato Grosso do Sul": "America/Campo_Grande",
    "Minas Gerais": "America/Sao_Paulo",
    Para: "America/Belem",
    Paraiba: "America/Fortaleza",
    Parana: "America/Sao_Paulo",
    Pernambuco: "America/Recife",
    Piaui: "America/Fortaleza",
    "Rio de Janeiro": "America/Sao_Paulo",
    "Rio Grande do Norte": "America/Fortaleza",
    "Rio Grande do Sul": "America/Sao_Paulo",
    Rondonia: "America/Porto_Velho",
    Roraima: "America/Boa_Vista",
    "Santa Catarina": "America/Sao_Paulo",
    "Sao Paulo": "America/Sao_Paulo",
    Sergipe: "America/Maceio",
    Tocantins: "America/Araguaina",
  },
  Brunei: "Asia/Brunei",

  Comoros: "Africa/Nairobi",
  Congo: "Africa/Brazzaville",
  "Costa Rica": "America/Costa_Rica",
  Croatia: "Europe/Zagreb",
  Cuba: "America/Havana",
  Cyprus: "Asia/Nicosia",
  Czechia: "Europe/Prague",
  Denmark: "Europe/Copenhagen",
  Djibouti: "Africa/Nairobi",
  Dominica: "America/Dominica",
  "Dominican Republic": "America/Santo_Domingo",
  Ecuador: {
    Galapagos: "Pacific/Galapagos",
    Quito: "America/Guayaquil",
  },
  Egypt: "Africa/Cairo",
  "El Salvador": "America/El_Salvador",
  "Equatorial Guinea": "Africa/Libreville",
  Eritrea: "Africa/Nairobi",
  Estonia: "Europe/Tallinn",
  Eswatini: "Africa/Johannesburg",
  Ethiopia: "Africa/Addis_Ababa",
  Fiji: "Pacific/Fiji",
  Finland: "Europe/Helsinki",
  France: {
    "French Guiana": "America/Cayenne",
    Guadeloupe: "America/Guadeloupe",
    Martinique: "America/Martinique",
    Mayotte: "Indian/Mayotte",
    Paris: "Europe/Paris",
    Reunion: "Indian/Reunion",
    "Saint Barthelemy": "America/St_Barthelemy",
    "Saint Martin": "America/Marigot",
  },
  Gabon: "Africa/Libreville",
  Gambia: "Africa/Dakar",
  Georgia: "Asia/Tbilisi",
  Germany: "Europe/Berlin",
  Ghana: "Africa/Accra",
  Greece: "Europe/Athens",
  Grenada: "America/Grenada",
  Guatemala: "America/Guatemala",
  Guinea: "Africa/Conakry",
  "Guinea-Bissau": "Africa/Bissau",
  Guyana: "America/Guyana",
  Haiti: "America/Port-au-Prince",
  Honduras: "America/Tegucigalpa",
  Hungary: "Europe/Budapest",
  Iceland: "Atlantic/Reykjavik",
  India: "Asia/Kolkata",
  Indonesia: {
    Jakarta: "Asia/Jakarta",
    Jayapura: "Asia/Jayapura",
    Makassar: "Asia/Makassar",
    Pontianak: "Asia/Pontianak",
  },
  Iran: "Asia/Tehran",
  Iraq: "Asia/Baghdad",
  Ireland: "Europe/Dublin",
  Israel: "Asia/Jerusalem",
  Italy: "Europe/Rome",
  Jamaica: "America/Jamaica",
  Japan: "Asia/Tokyo",
  Jordan: "Asia/Amman",
  Kazakhstan: {
    Almaty: "Asia/Almaty",
    Aqtobe: "Asia/Aqtobe",
    Atyrau: "Asia/Atyrau",
    Kostanay: "Asia/Qyzylorda",
  },
  Kenya: "Africa/Nairobi",
  Kiribati: {
    Enderbury: "Pacific/Kiritimati",
    Kiritimati: "Pacific/Kiritimati",
    Tarawa: "Pacific/Tarawa",
  },
  Kosovo: "Europe/Belgrade",
  Kuwait: "Asia/Kuwait",
  Kyrgyzstan: "Asia/Bishkek",
  Laos: "Asia/Vientiane",
  Latvia: "Europe/Riga",
  Lebanon: "Asia/Beirut",
  Lesotho: "Africa/Maseru",
  Liberia: "Africa/Monrovia",
  Libya: "Africa/Tripoli",
  Liechtenstein: "Europe/Vaduz",
  Lithuania: "Europe/Vilnius",
  Luxembourg: "Europe/Luxembourg",
  Madagascar: "Indian/Antananarivo",
  Malawi: "Africa/Blantyre",
  Malaysia: {
    "Kuala Lumpur": "Asia/Kuala_Lumpur",
    Kuching: "Asia/Kuching",
  },
  Maldives: "Indian/Maldives",
  Mali: "Africa/Bamako",
  Malta: "Europe/Malta",
  "Marshall Islands": "Pacific/Majuro",
  Mauritania: "Africa/Nouakchott",
  Mauritius: "Indian/Mauritius",
  Mexico: {
    "Baja California": "America/Tijuana",
    Chihuahua: "America/Chihuahua",
    Mexicali: "America/Tijuana",
    Hermosillo: "America/Hermosillo",
    Mazatlan: "America/Mazatlan",
    Merida: "America/Merida",
    "Mexico City": "America/Mexico_City",
    Monterrey: "America/Monterrey",
  },
  Micronesia: {
    Chuuk: "Pacific/Chuuk",
    Kosrae: "Pacific/Kosrae",
    Pohnpei: "Pacific/Pohnpei",
  },
  Moldova: "Europe/Chisinau",
  Monaco: "Europe/Monaco",
  Mongolia: {
    Hovd: "Asia/Hovd",
    Ulaanbaatar: "Asia/Ulaanbaatar",
  },
  Montenegro: "Europe/Podgorica",
  Morocco: "Africa/Casablanca",
  Mozambique: "Africa/Maputo",
  Myanmar: "Asia/Yangon",
  Namibia: "Africa/Windhoek",
  Nauru: "Pacific/Nauru",
  Nepal: "Asia/Kathmandu",
  Netherlands: "Europe/Amsterdam",
  "New Zealand": {
    Auckland: "Pacific/Auckland",
    "Chatham Islands": "Pacific/Chatham",
  },
  Nicaragua: "America/Managua",
  Niger: "Africa/Niamey",
  Nigeria: "Africa/Lagos",
  "North Korea": "Asia/Pyongyang",
  "North Macedonia": "Europe/Skopje",
  Norway: {
    Oslo: "Europe/Oslo",
    Svalbard: "Arctic/Longyearbyen",
  },
  Oman: "Asia/Muscat",
  Pakistan: "Asia/Karachi",
  Palau: "Pacific/Palau",
  Panama: "America/Panama",
  "Papua New Guinea": "Pacific/Port_Moresby",
  Paraguay: "America/Asuncion",
  Peru: "America/Lima",
  Philippines: "Asia/Manila",
  Poland: "Europe/Warsaw",
  Portugal: {
    Azores: "Atlantic/Azores",
    Madeira: "Atlantic/Madeira",
    Mainland: "Europe/Lisbon",
  },
  Qatar: "Asia/Qatar",
  Romania: "Europe/Bucharest",
  Russia: {
    Moscow: "Europe/Moscow",
    Kaliningrad: "Europe/Kaliningrad",
    Samara: "Europe/Samara",
    Yekaterinburg: "Asia/Yekaterinburg",
    Omsk: "Asia/Omsk",
    Krasnoyarsk: "Asia/Krasnoyarsk",
    Irkutsk: "Asia/Irkutsk",
    Yakutsk: "Asia/Yakutsk",
    Vladivostok: "Asia/Vladivostok",
    Magadan: "Asia/Magadan",
    Kamchatka: "Asia/Kamchatka",
  },
  Rwanda: "Africa/Kigali",
  "Saint Kitts and Nevis": "America/St_Kitts",
  "Saint Lucia": "America/St_Lucia",
  "Saint Vincent and the Grenadines": "America/St_Vincent",
  Samoa: "Pacific/Apia",
  "San Marino": "Europe/San_Marino",
  "Sao Tome and Principe": "Africa/Sao_Tome",
  "Saudi Arabia": "Asia/Riyadh",
  Senegal: "Africa/Dakar",
  Serbia: "Europe/Belgrade",
};

// fixedclock
const fixedClock =()=>{
  let fclock = "";
  fclock += `
  <div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3">
      <h4 class="my-0 fw-normal d-flex flex-column"><i class="bi bi-clock-history"></i>Bangladesh</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title" id='Bangladesh'></h1>
      <button type="button" class="w-100 btn btn-lg btn-outline-primary">More About This Zone</button>
    </div>
  </div>
`;
document.getElementById("newCl").innerHTML += fclock;
setInterval(() => {
  let currentDate = new Date();
  let options = { timeZone: 'Asia/Dhaka' };
  let onlyTime = currentDate.toLocaleString('en-US', options).split(",")[1];
  document.getElementById('Bangladesh').innerHTML= onlyTime;
}, 1000);

}
fixedClock();
//searchcontents
const searceContent = () => {
  let html = "<table>";
  for (let country in worldsTimeZone) {
    const index = Object.keys(worldsTimeZone).indexOf(country);
    let timeZone = worldsTimeZone[country];
    if (typeof timeZone === "string") {
      html += `<tr><td>${country}</td><td><button onclick="editTask(${index})" type="button" id="EditBtn" class="text-primary">${timeZone}</button></td></tr>`;
    } else {
      for (let state in timeZone) {
        const stateIndex = Object.keys(timeZone).indexOf(state);
        let stateTimeZone = timeZone[state];
        html += `<tr><td>${country} - ${state}</td><td><button onclick="editStateTask('${state}','${stateTimeZone}','${stateIndex}')" type="button" id="EditBtn" class="text-primary">${stateTimeZone}</button></td></tr>`;
      }
    }
  }
  html += "</table>";
  let boxx = document.getElementById("boxx");
  boxx.innerHTML = html;
};
searceContent()

const newClock = (x) => {
  let y = x.slice(x.indexOf("/") + 1);
  let html = "";
  html += `
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal d-flex flex-column"><i class="bi bi-clock-history"></i>${y}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title" id='${y}'></h1>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">More About This Zone</button>
          </div>
        </div>
    `;

  document.getElementById("newCl").innerHTML += html;
  setInterval(() => {
    let date = new Date();
    document.getElementById(y).innerHTML = date
      .toLocaleString("en-US", {
        timeZone: x,
      })
      .split(",")[1];
  }, 1000);
};

document.getElementById("centerInput").addEventListener("submit", (e) => {
  e.preventDefault();

  let InputValue = document.getElementById("inputTimezone");
  let x = InputValue.value;
  newClock(x);
  const empty = document.getElementById('inputTimezone');
  empty.value = ""
  searceContent();
});



//search time zone
const callSearce = () => {
  let searchValue = document.getElementById("inputTimezone");
  searchValue.addEventListener("input", () => {
    let boxx = document.getElementById("boxx");
    boxx.style.display="table-row"
    let trList = document.querySelectorAll("tr");
    trList.forEach((item) => {
      let searchText = item.getElementsByTagName("td")[0].innerText;
      let search = searchValue.value;
      let re = new RegExp(search, "gi");
      if (searchText.match(re)) {
        item.style.display = "table-row";
      } else {
        item.style.display = "none";
      }
    });
  });
  // searceContent()
  searchValue.value = "";
}
callSearce();

//timezone data get
const editTask = (index) => {
  const btnValue = document.getElementById('EditBtn').value;
  console.log(btnValue)
  let saveIndex = document.getElementById("saveIndex")
  saveIndex.value = index
  console.log(saveIndex.value)
  const searchBoxValue = document.getElementById('inputTimezone');
  const key = Object.keys(worldsTimeZone)[index];
  searchBoxValue.value = worldsTimeZone[key];
  console.log(searchBoxValue.value)

}
const editStateTask = (state, stateTimeZone, stateIndex) => {
  const searchBoxValue = document.getElementById('inputTimezone');
  searchBoxValue.value = stateTimeZone;
  const saveIndex = document.getElementById("saveIndex");
  saveIndex.value = stateIndex;
  console.log(state)

};
