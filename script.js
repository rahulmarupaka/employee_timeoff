
// Store Details from JSON file

var obj = {
            Stores: [
	{
		id: "4",
		name: "3 Greens Market",
		short_code: "3_greens_market",
		acct_code: "",
		address1: "354 W Hubbard St",
		address2: "Chicago, IL, 60654",
		phone: "312-888-9195",
		city: "chicago",
		state: "0",
		zip: "60654",
		contact_email: "contact@3greensmarket.com",
		manager_email: "3greensmanagers@hogsalt.com",
		office_email: "office@3greensmarket.com",
		url: "http://3greensmarket.com",
		reviews_yelp: "3-greens-market-chicago-3",
		reviews_ta: "g35805-d6924980-Reviews-3_Greens_Market-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "2",
		active: "1"
		},
		{
		id: "5",
		name: "4 Charles Prime Rib",
		short_code: "4_charles_prime_rib",
		acct_code: "",
		address1: "4 Charles St",
		address2: "New York, NY 10014",
		phone: "212-561-5992",
		city: "new york",
		state: "0",
		zip: "10014",
		contact_email: "contact@nycprimerib.com",
		manager_email: "nycprimeribmanagers@hogsalt.com",
		office_email: "office@nycprimerib.com",
		url: "http://www.nycprimerib.com",
		reviews_yelp: "4-charles-prime-rib-new-york",
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "3",
		active: "1"
		},
		{
		id: "33",
		name: "Aster Hall",
		short_code: "aster_hall",
		acct_code: "",
		address1: "",
		address2: "",
		phone: "",
		city: "",
		state: "",
		zip: "0",
		contact_email: "",
		manager_email: "managers@asterhallchicago.com",
		office_email: "office@asterhallchicago.com,dgrajewski@asterhallchicago.com,hridenour@hogsalt.com",
		url: "",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "0",
		active: "1"
		},
		{
		id: "6",
		name: "Au Cheval",
		short_code: "au_cheval",
		acct_code: "",
		address1: "800 W Randolph St",
		address2: "Chicago, IL 60607",
		phone: "",
		city: "chicago",
		state: "0",
		zip: "60607",
		contact_email: "contact@auchevalchicago.com",
		manager_email: "auchevalmanagers@hogsalt.com",
		office_email: "office@auchevalchicago.com",
		url: "http://auchevalchicago.com",
		reviews_yelp: "au-cheval-chicago",
		reviews_ta: "g35805-d3181580-Reviews-Au_Cheval-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "4",
		active: "1"
		},
		{
		id: "25",
		name: "Au Cheval NYC",
		short_code: "au_cheval_nyc",
		acct_code: "",
		address1: "79 Walker St",
		address2: "New York, NY 10014",
		phone: "",
		city: "new york",
		state: "0",
		zip: "10013",
		contact_email: "contact@auchevaldiner.com",
		manager_email: "managers@auchevaldiner.com",
		office_email: "office@auchevalnyc.com",
		url: "http://auchevaldiner.com",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "21",
		active: "1"
		},
		{
		id: "7",
		name: "Bavette's Chicago",
		short_code: "bavettes_chicago",
		acct_code: "",
		address1: "218 W Kinzie St",
		address2: "Chicago, IL 60654",
		phone: "312-624-8154",
		city: "chicago",
		state: "0",
		zip: "60654",
		contact_email: "contact@bavetteschicago.com",
		manager_email: "bavettesmanagers@hogsalt.com",
		office_email: "office@bavetteschicago.com",
		url: "http://bavettessteakhouse.com/chicago",
		reviews_yelp: "bavettes-bar-and-boeuf-chicago",
		reviews_ta: "g35805-d3606915-Reviews-Bavette_s_Bar_and_Boeuf-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "5",
		active: "1"
		},
		{
		id: "8",
		name: "Bavette's Las Vegas",
		short_code: "bavettes_las_vegas",
		acct_code: "",
		address1: "3770 Las Vegas Blvd S",
		address2: "Las Vegas, NV 89109",
		phone: "702-730-6700",
		city: "las vegas",
		state: "0",
		zip: "89109",
		contact_email: "contact@bavetteslasvegas.com",
		manager_email: "managers@bavetteslasvegas.com",
		office_email: "contact@bavetteslasvegas.com,hridenour@hogsalt.com",
		url: "http://bavettessteakhouse.com/las-vegas",
		reviews_yelp: "bavettes-steakhouse-and-bar-las-vegas-2",
		reviews_ta: "g45963-d12999839-Reviews-Bavette_s_Steakhouse_Bar-Las_Vegas_Nevada.html",
		reviews_reserve: null,
		cron_job_id: "6",
		active: "1"
		},
		{
		id: "9",
		name: "C.C. Ferns",
		short_code: "cc_ferns",
		acct_code: "",
		address1: "2806 W Augusta Blvd",
		address2: "Chicago, IL 60622",
		phone: "773-384-2547",
		city: "chicago",
		state: "0",
		zip: "60622",
		contact_email: "contact@ccferns.com",
		manager_email: "ccfernsmanagers@hogsalt.com",
		office_email: "office@californiaclipper.com",
		url: "http://ccferns.com",
		reviews_yelp: "cc-ferns-coffee-bar-and-spirits-chicago",
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "7",
		active: "1"
		},
		{
		id: "10",
		name: "California Clipper",
		short_code: "california_clipper",
		acct_code: "",
		address1: "1002 N California Ave",
		address2: "Chicago, IL 60622",
		phone: "773-384-2547",
		city: "chicago",
		state: "0",
		zip: "60622",
		contact_email: "contact@californiaclipper.com",
		manager_email: "clippermanagers@hogsalt.com",
		office_email: "office@californiaclipper.com",
		url: "http://californiaclipper.com",
		reviews_yelp: "the-california-clipper-chicago",
		reviews_ta: "g35805-d563981-Reviews-California_Clipper-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "8",
		active: "1"
		},
		{
		id: "12",
		name: "Doughnut Vault Canal",
		short_code: "doughnut_vault_canal",
		acct_code: "",
		address1: "111 N Canal St",
		address2: "Chicago, IL 60606",
		phone: "312-285-2830",
		city: "chicago",
		state: "0",
		zip: "60606",
		contact_email: "contact@doughnutvault.com",
		manager_email: "doughnutvaultmanagers@hogsalt.com",
		office_email: "canaloffice@doughnutvault.com",
		url: "http://doughnutvault.com",
		reviews_yelp: "doughnut-vault-canal-chicago",
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "10",
		active: "1"
		},
		{
		id: "11",
		name: "Doughnut Vault Franklin",
		short_code: "doughnut_vault_franklin",
		acct_code: "",
		address1: "401 N Franklin St",
		address2: "Chicago, IL 60654",
		phone: "",
		city: "chicago",
		state: "0",
		zip: "60654",
		contact_email: "contact@doughnutvault.com",
		manager_email: "doughnutvaultmanagers@hogsalt.com",
		office_email: "franklinoffice@doughnutvault.com",
		url: "http://doughnutvault.com",
		reviews_yelp: "the-doughnut-vault-chicago",
		reviews_ta: "g35805-d2302509-Reviews-Doughnut_Vault-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "9",
		active: "1"
		},
		{
		id: "31",
		name: "Doughnut Vault Production",
		short_code: "doughnut_vault_production",
		acct_code: "",
		address1: "",
		address2: "",
		phone: "",
		city: "",
		state: "",
		zip: "0",
		contact_email: "",
		manager_email: "",
		office_email: "",
		url: "",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "0",
		active: "1"
		},
		{
		id: "14",
		name: "Gilt Bar",
		short_code: "gilt_bar",
		acct_code: "",
		address1: "230 W Kinzie St",
		address2: "Chicago, IL 60654",
		phone: "312-464-9544",
		city: "chicago",
		state: "0",
		zip: "60654",
		contact_email: "contact@giltbarchicago.com",
		manager_email: "giltmanagers@hogsalt.com",
		office_email: "office@giltbarchicago.com",
		url: "http://www.giltbarchicago.com",
		reviews_yelp: "gilt-bar-chicago",
		reviews_ta: "g35805-d1743940-Reviews-Gilt_Bar-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "12",
		active: "1"
		},
		{
		id: "15",
		name: "Green Street Smoked Meats",
		short_code: "green_street",
		acct_code: "",
		address1: "112 N Green St",
		address2: "Chicago, IL, 60607",
		phone: "312-754-0431",
		city: "chicago",
		state: "0",
		zip: "60607",
		contact_email: "contact@greenstreetmeats.com",
		manager_email: "greenstreetmanagers@hogsalt.com",
		office_email: "office@greenstreetmeats.com",
		url: "http://greenstreetmeats.com",
		reviews_yelp: "green-street-smoked-meats-chicago",
		reviews_ta: "g35805-d6279952-Reviews-Green_Street_Smoked_Meats-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "13",
		active: "1"
		},
		{
		id: "16",
		name: "High Five Ramen",
		short_code: "high_five_ramen",
		acct_code: "",
		address1: "112 N Green St",
		address2: "Chicago, IL 60607",
		phone: "312-754-0431 ",
		city: "chicago",
		state: "0",
		zip: "60607",
		contact_email: "contact@greenstreetmeats.com",
		manager_email: "greenstreetmanagers@hogsalt.com",
		office_email: "office@greenstreetmeats.com",
		url: "http://highfiveramen.com",
		reviews_yelp: "high-five-ramen-chicago-4",
		reviews_ta: "g35805-d8684162-Reviews-High_Five_Ramen-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "14",
		active: "1"
		},
		{
		id: "26",
		name: "Hogsalt",
		short_code: "hq",
		acct_code: "",
		address1: "936 W Huron St",
		address2: "Chicago, IL 60642",
		phone: "",
		city: "Chicago",
		state: "0",
		zip: "60642",
		contact_email: "hq@hogsalt.com",
		manager_email: "",
		office_email: "hridenour@hogsalt.com ",
		url: "",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "23",
		active: "1"
		},
		{
		id: "17",
		name: "Maude's Liquor Bar",
		short_code: "maudes_liquor_bar",
		acct_code: "",
		address1: "840 W Randolph St",
		address2: "Chicago, IL 60607",
		phone: "312-243-9712",
		city: "chicago",
		state: "0",
		zip: "60607",
		contact_email: "contact@maudesliquorbar.com",
		manager_email: "maudesmanagers@hogsalt.com",
		office_email: "office@maudesliquorbar.com",
		url: "http://www.maudesliquorbar.com",
		reviews_yelp: "maudes-liquor-bar-chicago",
		reviews_ta: "g35805-d1995614-Reviews-Maudes_liquor_bar-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "15",
		active: "1"
		},
		{
		id: "29",
		name: "MDB",
		short_code: "mdb",
		acct_code: "",
		address1: "",
		address2: "",
		phone: "",
		city: "Chicago",
		state: "IL",
		zip: "0",
		contact_email: "jgorr@hogsalt.com.allison@hogsalt.com,hridenour@hogsalt.com",
		manager_email: "hridenour@hogsalt.com",
		office_email: "hridenour@hogsalt.com",
		url: "",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "0",
		active: "1"
		},
		{
		id: "27",
		name: "Money Line",
		short_code: "money_line",
		acct_code: "",
		address1: "",
		address2: "",
		phone: "",
		city: "Las Vegas",
		state: "NV",
		zip: "0",
		contact_email: "moneyline@hogsalt.com",
		manager_email: "moneyline@hogsalt.com",
		office_email: "moneyline@hogsalt.com",
		url: "",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "24",
		active: "1"
		},
		{
		id: "21",
		name: "Radio Anago",
		short_code: "radio_anago",
		acct_code: "",
		address1: "226 W Kinzie St",
		address2: "Chicago, IL 60654",
		phone: "",
		city: "chicago",
		state: "0",
		zip: "60654",
		contact_email: "contact@radioanago.com",
		manager_email: "managers@radioanago.com",
		office_email: "office@giltbarchicago.com",
		url: "http://www.radioanago.com",
		reviews_yelp: "radio-anago-chicago",
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "19",
		active: "1"
		},
		{
		id: "18",
		name: "Sawada Coffee",
		short_code: "sawada_coffee",
		acct_code: "",
		address1: "112 N Green St",
		address2: "Chicago, IL, 60607",
		phone: "",
		city: "chicago",
		state: "0",
		zip: "60607",
		contact_email: "contact@sawadacoffee.com",
		manager_email: "sawadamanagers@hogsalt.com",
		office_email: "office@greenstreetmeats.com ",
		url: "http://sawadacoffee.com",
		reviews_yelp: "sawada-coffee-chicago",
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "16",
		active: "1"
		},
		{
		id: "22",
		name: "Sawada Matcha",
		short_code: "sawada_matcha",
		acct_code: "",
		address1: "226 W Kinzie St",
		address2: "Chicago, IL 60654",
		phone: "",
		city: "chicago",
		state: "0",
		zip: "60654",
		contact_email: "contact@sawadamatcha.com",
		manager_email: "sawadamanagers@hogsalt.com ",
		office_email: "office@giltbarchicago.com",
		url: "http://www.sawadamatcha.com",
		reviews_yelp: "sawada-matcha-chicago-3",
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "20",
		active: "1"
		},
		{
		id: "19",
		name: "Small Cheval Milwaukee",
		short_code: "small_cheval_milwaukee",
		acct_code: "",
		address1: "1732 N Milwaukee Ave",
		address2: "Chicago, IL 60647",
		phone: "",
		city: "chicago",
		state: "0",
		zip: "60647",
		contact_email: "contact@smallcheval.com",
		manager_email: "smallchevalmanagers@hogsalt.com",
		office_email: "office@smallcheval.com",
		url: "http://smallcheval.com",
		reviews_yelp: "small-cheval-chicago-2",
		reviews_ta: "g35805-d8549213-Reviews-Small_Cheval-Chicago_Illinois.html",
		reviews_reserve: null,
		cron_job_id: "17",
		active: "1"
		},
		{
		id: "20",
		name: "Small Cheval Riverside",
		short_code: "small_cheval_riverside",
		acct_code: "",
		address1: "150 N Riverside Plaza",
		address2: "Chicago, IL 60606",
		phone: "",
		city: "chicago",
		state: "0",
		zip: "60606",
		contact_email: "",
		manager_email: "managers@smallchevalriverside.com",
		office_email: "office@smallchevalriverside.com",
		url: "http://smallcheval.com",
		reviews_yelp: "small-cheval-chicago-3",
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "18",
		active: "1"
		},
		{
		id: "24",
		name: "Small Cheval Wells",
		short_code: "small_cheval_wells",
		acct_code: "",
		address1: "1345 North Wells Street",
		address2: "Chicago, IL 60610",
		phone: "",
		city: "chicago",
		state: "0",
		zip: "60610",
		contact_email: "contact@smallcheval.com",
		manager_email: "managers@smallchevalwells.com",
		office_email: "office@smallchevalwells.com",
		url: "http://smallcheval.com",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "22",
		active: "1"
		},
		{
		id: "34",
		name: "Sydney's",
		short_code: "sydneys",
		acct_code: "",
		address1: "",
		address2: "",
		phone: "",
		city: "",
		state: "",
		zip: "0",
		contact_email: "",
		manager_email: "",
		office_email: "koconnor@hogsalt.com",
		url: "",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "0",
		active: "1"
		},
		{
		id: "28",
		name: "Test Store",
		short_code: "test_store",
		acct_code: "",
		address1: "",
		address2: "",
		phone: "",
		city: "",
		state: "",
		zip: "0",
		contact_email: "ldomagalski@hogsalt.com",
		manager_email: "jtalamantez@hogsalt.com",
		office_email: "ldomag1@gmail.com,ldomagalski@hogsalt.com",
		url: "",
		reviews_yelp: null,
		reviews_ta: null,
		reviews_reserve: null,
		cron_job_id: "25",
		active: "1"
		}
	]

};
        
for(var i=0;i<obj.Stores.length;i++)
	{
	    var option=$('<option></option>').text(obj.Stores[i]['name']);
	  $('select').append(option);
	   
	}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);


}) ();


// function check() {

// 	document.getElementById('f1').innerHTML = "<br> Store Name:   " + document.getElementById("store").value + 
//         									"<br> Employee Name:   " + document.getElementById("employeename").value + 
//         									"<br> Employee Email:   " + document.getElementById("mail").value + 
//         									"<br> Requested time off: <br> from:   " + document.getElementById("from").value + 
//         									"to:   " + document.getElementById("to").value + 
//         									"<br> Reason fro Time off:   " + document.getElementById("comments").value +
//         									"<br> <br>";
        								
//        // alert("Request Submitted to manager!");
//    }


$('form.main-form').on('submit', function(){

	var that = $(this),
		url = that.attr('action'),
		type = that.attr('method'),
		data = {};

	that.find('[name]').each(function(index, value) {
		var that = $(this),
			name = that.attr('name'),
			value = that.val();

		data[name] = value;

	});

	console.log(data);
	
	// $.ajax({
	// 	url: url,
	// 	type: type,
	// 	data: data,
	// 	success: function(response){
	// 		console.log(response);
	// 	}

	// });

	return false;

} );