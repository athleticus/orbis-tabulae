require('../common');

$ = require('jquery/dist/jquery');

const continentsByCountry = {
  "AF": [
    "AS"
  ],
  "AL": [
    "EU"
  ],
  "AQ": [
    "AN"
  ],
  "DZ": [
    "AF"
  ],
  "AS": [
    "OC"
  ],
  "AD": [
    "EU"
  ],
  "AO": [
    "AF"
  ],
  "AG": [
    "NA"
  ],
  "AZ": [
    "EU",
    "AS"
  ],
  "AR": [
    "SA"
  ],
  "AU": [
    "OC"
  ],
  "AT": [
    "EU"
  ],
  "BS": [
    "NA"
  ],
  "BH": [
    "AS"
  ],
  "BD": [
    "AS"
  ],
  "AM": [
    "EU",
    "AS"
  ],
  "BB": [
    "NA"
  ],
  "BE": [
    "EU"
  ],
  "BM": [
    "NA"
  ],
  "BT": [
    "AS"
  ],
  "BO": [
    "SA"
  ],
  "BA": [
    "EU"
  ],
  "BW": [
    "AF"
  ],
  "BV": [
    "AN"
  ],
  "BR": [
    "SA"
  ],
  "BZ": [
    "NA"
  ],
  "IO": [
    "AS"
  ],
  "SB": [
    "OC"
  ],
  "VG": [
    "NA"
  ],
  "BN": [
    "AS"
  ],
  "BG": [
    "EU"
  ],
  "MM": [
    "AS"
  ],
  "BI": [
    "AF"
  ],
  "BY": [
    "EU"
  ],
  "KH": [
    "AS"
  ],
  "CM": [
    "AF"
  ],
  "CA": [
    "NA"
  ],
  "CV": [
    "AF"
  ],
  "KY": [
    "NA"
  ],
  "CF": [
    "AF"
  ],
  "LK": [
    "AS"
  ],
  "TD": [
    "AF"
  ],
  "CL": [
    "SA"
  ],
  "CN": [
    "AS"
  ],
  "TW": [
    "AS"
  ],
  "CX": [
    "AS"
  ],
  "CC": [
    "AS"
  ],
  "CO": [
    "SA"
  ],
  "KM": [
    "AF"
  ],
  "YT": [
    "AF"
  ],
  "CG": [
    "AF"
  ],
  "CD": [
    "AF"
  ],
  "CK": [
    "OC"
  ],
  "CR": [
    "NA"
  ],
  "HR": [
    "EU"
  ],
  "CU": [
    "NA"
  ],
  "CY": [
    "EU",
    "AS"
  ],
  "CZ": [
    "EU"
  ],
  "BJ": [
    "AF"
  ],
  "DK": [
    "EU"
  ],
  "DM": [
    "NA"
  ],
  "DO": [
    "NA"
  ],
  "EC": [
    "SA"
  ],
  "SV": [
    "NA"
  ],
  "GQ": [
    "AF"
  ],
  "ET": [
    "AF"
  ],
  "ER": [
    "AF"
  ],
  "EE": [
    "EU"
  ],
  "FO": [
    "EU"
  ],
  "FK": [
    "SA"
  ],
  "GS": [
    "AN"
  ],
  "FJ": [
    "OC"
  ],
  "FI": [
    "EU"
  ],
  "AX": [
    "EU"
  ],
  "FR": [
    "EU"
  ],
  "GF": [
    "SA"
  ],
  "PF": [
    "OC"
  ],
  "TF": [
    "AN"
  ],
  "DJ": [
    "AF"
  ],
  "GA": [
    "AF"
  ],
  "GE": [
    "EU",
    "AS"
  ],
  "GM": [
    "AF"
  ],
  "PS": [
    "AS"
  ],
  "DE": [
    "EU"
  ],
  "GH": [
    "AF"
  ],
  "GI": [
    "EU"
  ],
  "KI": [
    "OC"
  ],
  "GR": [
    "EU"
  ],
  "GL": [
    "NA"
  ],
  "GD": [
    "NA"
  ],
  "GP": [
    "NA"
  ],
  "GU": [
    "OC"
  ],
  "GT": [
    "NA"
  ],
  "GN": [
    "AF"
  ],
  "GY": [
    "SA"
  ],
  "HT": [
    "NA"
  ],
  "HM": [
    "AN"
  ],
  "VA": [
    "EU"
  ],
  "HN": [
    "NA"
  ],
  "HK": [
    "AS"
  ],
  "HU": [
    "EU"
  ],
  "IS": [
    "EU"
  ],
  "IN": [
    "AS"
  ],
  "ID": [
    "AS"
  ],
  "IR": [
    "AS"
  ],
  "IQ": [
    "AS"
  ],
  "IE": [
    "EU"
  ],
  "IL": [
    "AS"
  ],
  "IT": [
    "EU"
  ],
  "CI": [
    "AF"
  ],
  "JM": [
    "NA"
  ],
  "JP": [
    "AS"
  ],
  "KZ": [
    "EU",
    "AS"
  ],
  "JO": [
    "AS"
  ],
  "KE": [
    "AF"
  ],
  "KP": [
    "AS"
  ],
  "KR": [
    "AS"
  ],
  "KW": [
    "AS"
  ],
  "KG": [
    "AS"
  ],
  "LA": [
    "AS"
  ],
  "LB": [
    "AS"
  ],
  "LS": [
    "AF"
  ],
  "LV": [
    "EU"
  ],
  "LR": [
    "AF"
  ],
  "LY": [
    "AF"
  ],
  "LI": [
    "EU"
  ],
  "LT": [
    "EU"
  ],
  "LU": [
    "EU"
  ],
  "MO": [
    "AS"
  ],
  "MG": [
    "AF"
  ],
  "MW": [
    "AF"
  ],
  "MY": [
    "AS"
  ],
  "MV": [
    "AS"
  ],
  "ML": [
    "AF"
  ],
  "MT": [
    "EU"
  ],
  "MQ": [
    "NA"
  ],
  "MR": [
    "AF"
  ],
  "MU": [
    "AF"
  ],
  "MX": [
    "NA"
  ],
  "MC": [
    "EU"
  ],
  "MN": [
    "AS"
  ],
  "MD": [
    "EU"
  ],
  "ME": [
    "EU"
  ],
  "MS": [
    "NA"
  ],
  "MA": [
    "AF"
  ],
  "MZ": [
    "AF"
  ],
  "OM": [
    "AS"
  ],
  "NA": [
    "AF"
  ],
  "NR": [
    "OC"
  ],
  "NP": [
    "AS"
  ],
  "NL": [
    "EU"
  ],
  "AN": [
    "NA"
  ],
  "CW": [
    "NA"
  ],
  "AW": [
    "NA"
  ],
  "SX": [
    "NA"
  ],
  "BQ": [
    "NA"
  ],
  "NC": [
    "OC"
  ],
  "VU": [
    "OC"
  ],
  "NZ": [
    "OC"
  ],
  "NI": [
    "NA"
  ],
  "NE": [
    "AF"
  ],
  "NG": [
    "AF"
  ],
  "NU": [
    "OC"
  ],
  "NF": [
    "OC"
  ],
  "NO": [
    "EU"
  ],
  "MP": [
    "OC"
  ],
  "UM": [
    "OC",
    "NA"
  ],
  "FM": [
    "OC"
  ],
  "MH": [
    "OC"
  ],
  "PW": [
    "OC"
  ],
  "PK": [
    "AS"
  ],
  "PA": [
    "NA"
  ],
  "PG": [
    "OC"
  ],
  "PY": [
    "SA"
  ],
  "PE": [
    "SA"
  ],
  "PH": [
    "AS"
  ],
  "PN": [
    "OC"
  ],
  "PL": [
    "EU"
  ],
  "PT": [
    "EU"
  ],
  "GW": [
    "AF"
  ],
  "TL": [
    "AS"
  ],
  "PR": [
    "NA"
  ],
  "QA": [
    "AS"
  ],
  "RE": [
    "AF"
  ],
  "RO": [
    "EU"
  ],
  "RU": [
    "EU",
    "AS"
  ],
  "RW": [
    "AF"
  ],
  "BL": [
    "NA"
  ],
  "SH": [
    "AF"
  ],
  "KN": [
    "NA"
  ],
  "AI": [
    "NA"
  ],
  "LC": [
    "NA"
  ],
  "MF": [
    "NA"
  ],
  "PM": [
    "NA"
  ],
  "VC": [
    "NA"
  ],
  "SM": [
    "EU"
  ],
  "ST": [
    "AF"
  ],
  "SA": [
    "AS"
  ],
  "SN": [
    "AF"
  ],
  "RS": [
    "EU"
  ],
  "SC": [
    "AF"
  ],
  "SL": [
    "AF"
  ],
  "SG": [
    "AS"
  ],
  "SK": [
    "EU"
  ],
  "VN": [
    "AS"
  ],
  "SI": [
    "EU"
  ],
  "SO": [
    "AF"
  ],
  "ZA": [
    "AF"
  ],
  "ZW": [
    "AF"
  ],
  "ES": [
    "EU"
  ],
  "SS": [
    "AF"
  ],
  "EH": [
    "AF"
  ],
  "SD": [
    "AF"
  ],
  "SR": [
    "SA"
  ],
  "SJ": [
    "EU"
  ],
  "SZ": [
    "AF"
  ],
  "SE": [
    "EU"
  ],
  "CH": [
    "EU"
  ],
  "SY": [
    "AS"
  ],
  "TJ": [
    "AS"
  ],
  "TH": [
    "AS"
  ],
  "TG": [
    "AF"
  ],
  "TK": [
    "OC"
  ],
  "TO": [
    "OC"
  ],
  "TT": [
    "NA"
  ],
  "AE": [
    "AS"
  ],
  "TN": [
    "AF"
  ],
  "TR": [
    "EU",
    "AS"
  ],
  "TM": [
    "AS"
  ],
  "TC": [
    "NA"
  ],
  "TV": [
    "OC"
  ],
  "UG": [
    "AF"
  ],
  "UA": [
    "EU"
  ],
  "MK": [
    "EU"
  ],
  "EG": [
    "AF"
  ],
  "GB": [
    "EU"
  ],
  "GG": [
    "EU"
  ],
  "JE": [
    "EU"
  ],
  "IM": [
    "EU"
  ],
  "TZ": [
    "AF"
  ],
  "US": [
    "NA"
  ],
  "VI": [
    "NA"
  ],
  "BF": [
    "AF"
  ],
  "UY": [
    "SA"
  ],
  "UZ": [
    "AS"
  ],
  "VE": [
    "SA"
  ],
  "WF": [
    "OC"
  ],
  "WS": [
    "OC"
  ],
  "YE": [
    "AS"
  ],
  "ZM": [
    "AF"
  ],
  "XX": [
    "OC"
  ],
  "XE": [
    "AS"
  ],
  "XD": [
    "AS"
  ],
  "XS": [
    "AS"
  ]
};
const countriesByContinent = {
  "AS": [
    "AF",
    "AZ",
    "BH",
    "BD",
    "AM",
    "BT",
    "IO",
    "BN",
    "MM",
    "KH",
    "LK",
    "CN",
    "TW",
    "CX",
    "CC",
    "CY",
    "GE",
    "PS",
    "HK",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IL",
    "JP",
    "KZ",
    "JO",
    "KP",
    "KR",
    "KW",
    "KG",
    "LA",
    "LB",
    "MO",
    "MY",
    "MV",
    "MN",
    "OM",
    "NP",
    "PK",
    "PH",
    "TL",
    "QA",
    "RU",
    "SA",
    "SG",
    "VN",
    "SY",
    "TJ",
    "TH",
    "AE",
    "TR",
    "TM",
    "UZ",
    "YE",
    "XE",
    "XD",
    "XS"
  ],
  "EU": [
    "AL",
    "AD",
    "AZ",
    "AT",
    "AM",
    "BE",
    "BA",
    "BG",
    "BY",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FO",
    "FI",
    "AX",
    "FR",
    "GE",
    "DE",
    "GI",
    "GR",
    "VA",
    "HU",
    "IS",
    "IE",
    "IT",
    "KZ",
    "LV",
    "LI",
    "LT",
    "LU",
    "MT",
    "MC",
    "MD",
    "ME",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "RU",
    "SM",
    "RS",
    "SK",
    "SI",
    "ES",
    "SJ",
    "SE",
    "CH",
    "TR",
    "UA",
    "MK",
    "GB",
    "GG",
    "JE",
    "IM"
  ],
  "AN": [
    "AQ",
    "BV",
    "GS",
    "TF",
    "HM"
  ],
  "AF": [
    "DZ",
    "AO",
    "BW",
    "BI",
    "CM",
    "CV",
    "CF",
    "TD",
    "KM",
    "YT",
    "CG",
    "CD",
    "BJ",
    "GQ",
    "ET",
    "ER",
    "DJ",
    "GA",
    "GM",
    "GH",
    "GN",
    "CI",
    "KE",
    "LS",
    "LR",
    "LY",
    "MG",
    "MW",
    "ML",
    "MR",
    "MU",
    "MA",
    "MZ",
    "NA",
    "NE",
    "NG",
    "GW",
    "RE",
    "RW",
    "SH",
    "ST",
    "SN",
    "SC",
    "SL",
    "SO",
    "ZA",
    "ZW",
    "SS",
    "EH",
    "SD",
    "SZ",
    "TG",
    "TN",
    "UG",
    "EG",
    "TZ",
    "BF",
    "ZM"
  ],
  "OC": [
    "AS",
    "AU",
    "SB",
    "CK",
    "FJ",
    "PF",
    "KI",
    "GU",
    "NR",
    "NC",
    "VU",
    "NZ",
    "NU",
    "NF",
    "MP",
    "UM",
    "FM",
    "MH",
    "PW",
    "PG",
    "PN",
    "TK",
    "TO",
    "TV",
    "WF",
    "WS",
    "XX"
  ],
  "NA": [
    "AG",
    "BS",
    "BB",
    "BM",
    "BZ",
    "VG",
    "CA",
    "KY",
    "CR",
    "CU",
    "DM",
    "DO",
    "SV",
    "GL",
    "GD",
    "GP",
    "GT",
    "HT",
    "HN",
    "JM",
    "MQ",
    "MX",
    "MS",
    "AN",
    "CW",
    "AW",
    "SX",
    "BQ",
    "NI",
    "UM",
    "PA",
    "PR",
    "BL",
    "KN",
    "AI",
    "LC",
    "MF",
    "PM",
    "VC",
    "TT",
    "TC",
    "US",
    "VI"
  ],
  "SA": [
    "AR",
    "BO",
    "BR",
    "CL",
    "CO",
    "EC",
    "FK",
    "GF",
    "GY",
    "PY",
    "PE",
    "SR",
    "UY",
    "VE"
  ]
};

const iso3166_2 = {"official":{"AD":"Andorra","AE":"United Arab Emirates","AF":"Afghanistan","AG":"Antigua and Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Åland Islands","AZ":"Azerbaijan","BA":"Bosnia and Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"Saint Barthélemy","BM":"Bermuda","BN":"Brunei Darussalam","BO":"Bolivia, Plurinational State of","BQ":"Bonaire, Sint Eustatius and Saba","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Bouvet Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos (Keeling) Islands","CD":"Congo, the Democratic Republic of the","CF":"Central African Republic","CG":"Congo","CH":"Switzerland","CI":"Côte d'Ivoire","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CR":"Costa Rica","CU":"Cuba","CV":"Cabo Verde","CW":"Curaçao","CX":"Christmas Island","CY":"Cyprus","CZ":"Czechia","DE":"Germany","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands (Malvinas)","FM":"Micronesia, Federated States of","FO":"Faroe Islands","FR":"France","GA":"Gabon","GB":"United Kingdom","GD":"Grenada","GE":"Georgia","GF":"French Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"South Georgia and the South Sandwich Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong","HM":"Heard Island and McDonald Islands","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Isle of Man","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran, Islamic Republic of","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts and Nevis","KP":"Korea (the Democratic People's Republic of)","KR":"Korea (the Republic of)","KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Lao People's Democratic Republic","LB":"Lebanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moldova, Republic of","ME":"Montenegro","MF":"Saint Martin (French part)","MG":"Madagascar","MH":"Marshall Islands","MK":"Macedonia, the former Yugoslav Republic of","ML":"Mali","MM":"Myanmar","MN":"Mongolia","MO":"Macao","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands[note 1]","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre and Miquelon","PN":"Pitcairn","PR":"Puerto Rico","PS":"Palestine, State of","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Russian Federation","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"Saint Helena, Ascension and Tristan da Cunha","SI":"Slovenia","SJ":"Svalbard and Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"South Sudan","ST":"Sao Tome and Principe","SV":"El Salvador","SX":"Sint Maarten (Dutch part)","SY":"Syrian Arab Republic","SZ":"Swaziland","TC":"Turks and Caicos Islands","TD":"Chad","TF":"French Southern Territories","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkey","TT":"Trinidad and Tobago","TV":"Tuvalu","TW":"Taiwan, Province of China[note 2]","TZ":"Tanzania, United Republic of","UA":"Ukraine","UG":"Uganda","UM":"United States Minor Outlying Islands","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VA":"Holy See (Vatican City State)","VC":"Saint Vincent and the Grenadines","VE":"Venezuela, Bolivarian Republic of","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","VN":"Viet Nam","VU":"Vanuatu","WF":"Wallis and Futuna","WS":"Samoa","YE":"Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe"},"short":{"AD":"Andorra","AE":"United Arab Emirates","AF":"Afghanistan","AG":"Antigua and Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Åland Islands","AZ":"Azerbaijan","BA":"Bosnia and Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"Saint Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Bonaire, Sint Eustatius and Saba","BR":"Brazil","BS":"The Bahamas","BT":"Bhutan","BV":"Bouvet Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos (Keeling) Islands","CD":"Democratic Republic of the Congo","CF":"Central African Republic","CG":"Republic of the Congo","CH":"Switzerland","CI":"Ivory Coast","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CR":"Costa Rica","CU":"Cuba","CV":"Cabo Verde","CW":"Curaçao","CX":"Christmas Island","CY":"Cyprus","CZ":"Czechia","DE":"Germany","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Federated States of Micronesia","FO":"Faroe Islands","FR":"France","GA":"Gabon","GB":"United Kingdom","GD":"Grenada","GE":"Georgia (country)","GF":"French Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"The Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"South Georgia and the South Sandwich Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong","HM":"Heard Island and McDonald Islands","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","ID":"Indonesia","IE":"Republic of Ireland","IL":"Israel","IM":"Isle of Man","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts and Nevis","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Laos","LB":"Lebanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moldova","ME":"Montenegro","MF":"Collectivity of Saint Martin","MG":"Madagascar","MH":"Marshall Islands","MK":"Republic of Macedonia","ML":"Mali","MM":"Myanmar","MN":"Mongolia","MO":"Macau","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre and Miquelon","PN":"Pitcairn Islands","PR":"Puerto Rico","PS":"State of Palestine","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Russia","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"Saint Helena, Ascension and Tristan da Cunha","SI":"Slovenia","SJ":"Svalbard and Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"South Sudan","ST":"São Tomé and Príncipe","SV":"El Salvador","SX":"Sint Maarten (Dutch part)","SY":"Syria","SZ":"Swaziland","TC":"Turks and Caicos Islands","TD":"Chad","TF":"French Southern and Antarctic Lands","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"East Timor","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkey","TT":"Trinidad and Tobago","TV":"Tuvalu","TW":"Taiwan, China","TZ":"Tanzania","UA":"Ukraine","UG":"Uganda","UM":"United States Minor Outlying Islands","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VA":"Vatican City","VC":"Saint Vincent and the Grenadines","VE":"Venezuela","VG":"British Virgin Islands","VI":"United States Virgin Islands","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis and Futuna","WS":"Samoa","YE":"Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe"}};

const regionViewBoxes = {
'SA': '525 575 400 600',
'EU': '1000 150 500 300',
'AF': '975 400 625 575',
'AS': '1350 0 1250 800'
};

$(() => {
    const url = '/assets/BlankMap-World6-Equirectangular.svg';
  const $elem = $('<div id="#svg"/>');
  $elem.appendTo('body');
  

  $.ajax(url).then((data) => {
    $elem.append($(data).find('svg'))

    const $svg = $elem.find('svg');

        // fixes
    $svg.find('#sd').addClass('land sd');
    $svg.find('#path5459').attr('id', 'ss');
    
    const paths = {
        aland: 'path4630 path4632 path4634 path4636'.split(' '),
        janMayen: ['path6604'],
            svalbard: '6660 6718 6742 6730 6656 6754 6738 6720 6780 6784 6786 6788 6658 6732 6740 6744'.split(' ').map(n => `path${n}`),
      frenchSouthernAndAntarcticLands: '2160 2200'.split(' ').map(n => `path${n}`),
      heardIslandAndMcDonaldIslands: '2806'.split(' ').map(n => `path${n}`),
      curacao: '6512'.split(' ').map(n => `path${n}`),
      
    };
    
    const independents = {
        ax: {
        parent: 'fi',
        regions: ['aland']
      },
      sj: {
          parent: 'no',
        regions: ['svalbard', 'janMayen']
      },
      tf: {
        parent: 'fr',
        regions: ['frenchSouthernAndAntarcticLands']
      },
      hm: {
        parent: 'au',
        regions: ['heardIslandAndMcDonaldIslands']
      },
      cw: {
        parent: 'nl',
        regions: ['curacao']
      }
    }    
    
    Object.keys(independents).forEach(cc => {
        const {parent, regions} = independents[cc];
      
      const $parent = $svg.find(`#${parent}`);
      const $elem = $parent.append(`<g id="${cc}"/>`).find(`#${cc}`);
      
      regions.map(name => paths[name]).reduce((a, b) => a.concat(b), []).forEach(pathId => {
        $svg.find(`#${pathId}`).appendTo($elem);
      });
    });
    
    
    
    /*// aland islands
    
    const $fi = $svg.find('#fi');
    const $aland = $fi.append('<g id="ax"/>').find('g');
    aland.forEach(id => {
        $svg.find(`#${id}`).appendTo($aland);
    });
    
    
    const svalbardAndJanMayen = janMayen.concat(svalbard);
    const $no = $svg.find('#no');
    const $svalbardAndJanMayen = $no.append('<g id="sj" />').find('g');
    
    svalbardAndJanMayen.forEach(id => {
        $svg.find(`#${id}`).appendTo($svalbardAndJanMayen);
    });*/
    
    
    console.log($svg.find('#sj'))
    
    $svg.removeAttr('height')
        .removeAttr('width');
      
    $svg.attr('viewBox', regionViewBoxes.AF);

    const renames = {};

    const deletions = new Set([
      'ocean',
      'lakes'
    ]);

    deletions.forEach(key => {
      renames[key] = null;
    })

    Object.keys(renames).forEach(key => {
      const value = renames[key];

      const $elem = $(svg).find(`#${key}`)
      if (value) {
        $elem.attr('id', value);
      } else {
        $elem.remove();
      }
    });
    
    const $root = $svg;
    
    Object.keys(iso3166_2.short).forEach(key => {
        const value = iso3166_2.short[key];
      
      const $elem = $svg.find(`#${key.toLowerCase()}`);
      
      if(!$elem.length) {
        console.log(`Non-extant ${key}:${value}:${continentsByCountry[key]}`)
      } else if(!$elem.parent().is($root)) {
        console.log(`Not in root ${key}:${value}:${continentsByCountry[key]}`);
      }
    });

    $svg.find('path, g').attr('style', null)
    $svg.children('path, g').each(function() {
      const $elem = $(this);
      const rawId = $elem.attr('id');
      const id = rawId;
      const cc = rawId.toUpperCase();
      // todo: space separate words
      const name = iso3166_2.short[cc];

      //console.log(`Detected ${rawId}:${id}:${name}`)

      $elem.removeAttr('id');
      $elem.attr('data-name', name);
      $elem.attr('data-cc', cc);

      const continents = continentsByCountry[cc];

      if (continents) {
        $elem.attr('data-continents', continents.join(","));
      } else {
        console.warn(`No continent(s) found for ${cc}:${name}`);
      }

      //const enabled = countries.has(name); // || (console.log(name), confirm(`Include ${name}?`));
      //if (!enabled) {
        //$elem.attr('data-disabled', true)
      //}
      
        
      
    });
    
    const tlwh_to_tlbr = function({x, y, width, height}) {
            const [top, left] = [y, x];
      const [bottom, right] = [y + height, x + width];
      return {top, left, bottom, right};
    }
    
    const is_partially_inside = function(a, b) {
        return ((b.left <= a.left && a.left <= b.right) || (b.left <= a.right && a.right <= b.right)) &&
            ((b.top <= a.bottom && a.bottom <= b.bottom) || (b.top <= a.top && a.top <= b.bottom))
    }
    
    const overlap = function(a, b) {
      return is_partially_inside(a, b) || is_partially_inside(b, a);
    }
    
    // offset added to ensure regions only slightly over viewBox border are guaranteed to be seen
    const svgRect = {
            top: 0 - 25, 
      left: 0 - 25, 
      bottom: $svg.height() + 25,
      right: $svg.width() + 25
    }
    
    const inside = [];
    const outside = [];
    
    $svg.children('path, g').each(function() {
      const $elem = $(this);
      const bb = this.getBoundingClientRect();
      const inView = overlap(bb, svgRect);
      const cc = $elem.data().cc;
      //console.log(cc, bb, inView);
            (inView ? inside : outside).push(cc);
      if(!inView) {
        $elem.filter('path').add($elem.find('path')).css({
            fill: '#000'
        });
      }
    });
    
    console.log(inside);
    
    Object.keys(iso3166_2.short).forEach(key => {
        const value = iso3166_2.short[key];
      
      const $elem = $svg.find(`[data-cc="${key}"]`);
      
      if(!$elem.length) {
        console.log(`Could not find ${key}:${value}:${continentsByCountry[key]}`);
        console.log($svg.find(`.${key.toLowerCase()}`).length);
        console.log(continentsByCountry[key]);
      }
    });
    
    
        console.log(countriesByContinent.AF.map(cc => iso3166_2.short[cc]));
    
    countriesByContinent.AF.map(cc => {
        console.log(cc, iso3166_2.short[cc], $svg.find(`[data-cc="${cc}"]`));
    })
    
  })
})
