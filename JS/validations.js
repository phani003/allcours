



$(document).ready(function () {
    
    /*$("#imgsrc").show();*/
    $("#videos").hide();
    $("#dvlouds").show();
});

/*https://www.youtube.com/watch?v=-WM9VJa-ZUw*/


function menuload() {

    const menuslist = videslist.split(",");

    for (i = 0; i < menuslist.length; i++) {

        $("#menuli").append("<li class='menu_li' onclick=videopalye('" + i + "')> " + menuslist[i] + " </li>");

    }

    return false;

}



/*let sqltopics = "cluster,azure";*/

//const datatopics = {
//    sqltopics: 'cluster,azure',
//    angulartopics:'basics,advanced'
//}




function loudtopics(tp) {

    $("#dvcoures").show();
    $("#dvlouds").hide();
    $("#dvtopicsloud").show();
    $("#videos").hide();

    const courestopics = coures.split(",")[tp].trim();

    const topicss = datatopics[tp].split(",");

    $("#divmenuload tr").remove();

    for (k = 0; k < topicss.length; k++) {

        $("#divmenuload").append("<tr style='width:100%'><td style='width:100%'>   <button   type='button' onclick='submenuload(" +k+ ")'  class='btnprimary' >" + topicss[k] + "</button> <table id='tbsubmenus"+k +"'  style='display:none' class='tb_sub_menu'><table> </td></tr>");

    }
    return false;
     
}
const coures = "sql,anguler,testing";

/*---------------------sql topics start ------------------*/

let sqltopics = "cluster,azure";

let sqlheadcluster = "cluster1,cluster2,cluster3,cluster4,cluster5,cluster6,alwayson";
let sqlurlcluster = "u9-qyACul88?si=gDTBSximhKdlbrgo,ziF-7riyJa0?si=QA98XQ9A98GEf1Tq,ucoMZPN-QW4?si=o_0roNuQsw-N0ueE,lWWIS-jT_ss?si=bk8nF8_Qa31o1zQH,XSEqpJfzO9M?si=5v3LcYR06XKHoL2n,ervw7ptHC-g?si=AiBBQx6ycK7owLmq,-WM9VJa-ZUw?si=PyFkzM9_7J8GIlaq";

let sqlheadazure = "azure1,azure2";
let sqlurlazure = "ATUq4c2kPBc?si=m0RTI0z5p_lvn-x5,oVF6JyxGPR0?si=3rAsC2ATcEYywgoh";


const sqlhead = [sqlheadcluster, sqlheadazure];
const sqlurl = [sqlurlcluster, sqlurlazure];
//const sqlurl = ["u9-qyACul88?si=gDTBSximhKdlbrgo,ziF-7riyJa0?si=QA98XQ9A98GEf1Tq,ucoMZPN-QW4?si=o_0roNuQsw-N0ueE,lWWIS-jT_ss?si=bk8nF8_Qa31o1zQH,XSEqpJfzO9M?si=5v3LcYR06XKHoL2n,ervw7ptHC-g?si=AiBBQx6ycK7owLmq,-WM9VJa-ZUw?si=PyFkzM9_7J8GIlaq", "ATUq4c2kPBc?si=m0RTI0z5p_lvn-x5,oVF6JyxGPR0?si=3rAsC2ATcEYywgoh"];

/*----------------------sql topic end -----------------------*/



/*-----------------------anguler topics start ------------------*/
let angulertopics = "basics,advanced";

let anulerheadintraduction = "intradution,Gettingstrat,createapp";
let angulerurlintraduction = "0eWrpsCLMJQ?si=_V_yJ-vIs4Be1Win,FVPGJHinItI?si=bJImEv0_UOEMzCtX,mDoHtD1hI3I?si=LFAsMS_6qOZtzgz8";

const angulerhead = [anulerheadintraduction];
const angulerurl = [angulerurlintraduction];

/*------------------------naguler topics end --------------------*/

/*---------------------------testing topics start------------------*/

let testingtopics = "manuval,automation,jmeter";


let manuvalheading = "class1,class2,class3,class4,class5,class6,class7,class8,class9,class10,class11,class12";
let manuvalurl = "FAGpZaUn7v4?si=iF5tW6vLnwbKs-BA,CO6z8-bnt1s?si=NMRfqco4eb3NLThc,VwOqieBBV5Q?si=OfW_EVTY81S1QACh," +
    "91OlqJ9m2g4?si=Kprg9L-eh---Y9Td,eKMYRFn1714?si=k_RyHFhY-x_wWaiV,G6sltFijw9U?si=-fATRIc6vcZ19hNV," +
    "q-SeXcDEPIE?si=DYlVy7RqnKnVgk3o,uioAx4ouMU8?si=Q5ktjwTPL6_tvyKH,H6Cwf37xeH4?si=7vPzUYOedJLick0r," +
    "TjAW1mwlTsA?si=afiEt5brlpYGOpaQ,uD1-2uZjcj8?si=78RXHyfBchf8rhWk,vzBr6yOBKkg?si=nXNwo_fGKeH49zL3";
    
let automationseleniumheading = "selenium";
let automationseleniumurl = "0kgI92z3J7M?si=v1gH_yAeNy01VIYf";


let jmeterheading = "jmeter";
let jmeterurl = "SoW2pBak1_Q?si=_FtMPRGyobQMjz9z";




            
const testhead = [manuvalheading, automationseleniumheading, jmeterheading];
const testurl = [manuvalurl, automationseleniumurl, jmeterurl];

/*---------------------------testing topics end----------------------*/


var datatopics = [sqltopics, angulertopics, testingtopics];
var videohead = "";
var videourl = "";

function dataselectss(datas) {

    let data = coures.split(",")[datas];

    $("#videos").removeAttr("src");

    

    switch (data != null) {

        case data == 'sql':

            $("#dvtopicsloud").load("topics/sqltopics.txt");
            loudtopics(datas);
            videohead = sqlhead;
            videourl = sqlurl;
            
            break;
        case data == 'anguler':

            $("#dvtopicsloud").load("topics/angulertopics.txt");
            loudtopics(datas);
            videohead = angulerhead;
            videourl = angulerurl;
            
            break;
        case data == 'testing':
            $("#dvtopicsloud").load("topics/testingtopics.txt");
            loudtopics(datas);
            videohead = testhead;
            videourl = testurl;
            break;
    }

    return false;

}









var vidurls = "";

function submenuload(k) {

    if (videohead != "") {

        let submenuid = "tbsubmenus" + k;

        for (ss = 0; ss < videohead.length; ss++) {
            $("#tbsubmenus" + ss).hide();
        }

        $("#tbsubmenus" + k).show(1000);
        const headss = videohead[k].split(",");
        vidurls = videourl[k].split(",");
        $("#tbsubmenus" + k + " tr").remove();
        for (s = 0; s < headss.length; s++) {
            $("#tbsubmenus" + k).append("<tr><td> <button onclick='videopalye(" + s + ")' type='button' class='btnsubmenu' > " + headss[s] + " </button> </td></tr>")
        }



    } else {

        alert("No DATA")
    }



}
function videopalye(videono) {
    //const videslist = "automation.mp4";
    $("#dvtopicsloud").hide();
    $("#imgsrc").hide();
    $("#videos").show();
    /*const listvideos = videolist[videono].split(",");*/
    let videoss = "https://www.youtube.com/embed/" + vidurls[videono];
    $("#videos").removeAttr('src');
    $("#videos").attr("src", videoss);
    return false;
}

//function loadcours(cntent) {

//    const topicss = cntent.split(",");

//    for (l = 0; l < topicss.length; l++) {


//    }

    



//}




