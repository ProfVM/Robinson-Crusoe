//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
    InitQuestion41,
    InitQuestion42,
    InitQuestion43,
    InitQuestion44,
    InitQuestion45,
    InitQuestion46,
    InitQuestion47,
    InitQuestion48,
    InitQuestion49,
    InitQuestion50,
    InitQuestion51,
    InitQuestion52,
    InitQuestion53,
    InitQuestion54,
    InitQuestion55,
    InitQuestion56,
    InitQuestion57,
    InitQuestion58,
    InitQuestion59,
    InitQuestion60,
    InitQuestion61,
    InitQuestion62,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	$('#comment60').keyup(UpdateCount61);$('#comment60').keydown(UpdateCount61);$('#comment60').focus(function() { if (quiz) { quiz.currentQuestionIndex = 60; } });$('#counter60').text(700);
$('#comment61').keyup(UpdateCount62);$('#comment61').keydown(UpdateCount62);$('#comment61').focus(function() { if (quiz) { quiz.currentQuestionIndex = 61; } });$('#counter61').text(700);

});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('asGgkUdHMNg=', 986, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('asGgkUdHMNg=', 986, -1000, 1000),DecodeDecimal('GFD6N5K4hbw=', 986, -1000, 1000),DecodeDecimal('GFD6N5K4hbw=', 986, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 1What is Crusoe's father's advice about life?/SPAN>";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('uIlF1Wh5dgw=', 988, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Avoid the extremes of life";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uIlF1Wh5dgw=', 990, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Marry a wealthy woman";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3bZLVNkTgFE=', 992, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Join the navy at once";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jZgyfCwAG4w=', 994, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Travel for wisdom";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('5QC868OJeb4=', 996, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Seek fortune overseas";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('7M1pHLwGVb4=', 996, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7M1pHLwGVb4=', 996, -1000, 1000),DecodeDecimal('F0BXu8Pp90Q=', 996, -1000, 1000),DecodeDecimal('F0BXu8Pp90Q=', 996, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 1How does Crusoe first defy his parents' wishes?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('7M1pHLwGVb4=', 998, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He steals money to travel";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('563waJdALCo=', 1000, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He joins the military";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Y4nXuIm0huE=', 1002, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He runs away to join a ship";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Y4nXuIm0huE=', 1004, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He becomes a merchant";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('sxqkYVLzHHQ=', 1006, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "He marries in secret";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('qe3XDKumUjM=', 1006, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qe3XDKumUjM=', 1006, -1000, 1000),DecodeDecimal('971HOM5eGZo=', 1006, -1000, 1000),DecodeDecimal('971HOM5eGZo=', 1006, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 1What omen does Crusoe experience on his first voyage?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('qe3XDKumUjM=', 1008, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The ship catches fire";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K9RoJlbWHhU=', 1010, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The crew gets scurvy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oYE/nqtBFK4=', 1012, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The ship almost sinks";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oYE/nqtBFK4=', 1014, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He dreams of shipwreck";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('o2NbgTcU4rE=', 1016, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A sailor falls overboard";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('4naDpoeDOc4=', 1016, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4naDpoeDOc4=', 1016, -1000, 1000),DecodeDecimal('7Y97eX3dUyo=', 1016, -1000, 1000),DecodeDecimal('7Y97eX3dUyo=', 1016, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 2What happens on Crusoe's second sea voyage?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('1Mx32sG8RDk=', 1018, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He is captured by pirates";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1Mx32sG8RDk=', 1020, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He joins the navy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8H0v0ttlLe0=', 1022, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He discovers a deserted island";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Cx2N3/1sPvc=', 1024, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He wrecks on the African coast";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('wPwKWvNuh2E=', 1026, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "He makes a fortune in trade";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('FxSTRafYCRM=', 1026, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FxSTRafYCRM=', 1026, -1000, 1000),DecodeDecimal('fQ7YefHIK00=', 1026, -1000, 1000),DecodeDecimal('fQ7YefHIK00=', 1026, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 2What do Crusoe and Xury encounter during their escape?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('FCQTRAgQvE4=', 1028, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Wild animals and natives";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FCQTRAgQvE4=', 1030, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Cannibals and crocodiles";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MrLaqGKeF5k=', 1032, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A Dutch ship and pirates";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8oUNJLJsNX8=', 1034, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A ghost ship and mutiny";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Eqi6HuP5unY=', 1036, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A whale and a storm";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('xbHFJI+EXk8=', 1036, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xbHFJI+EXk8=', 1036, -1000, 1000),DecodeDecimal('B0OoelgT9uw=', 1036, -1000, 1000),DecodeDecimal('B0OoelgT9uw=', 1036, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 2Who ultimately rescues Crusoe and Xury?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('kADtXIz36WY=', 1038, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A Portuguese captain";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kADtXIz36WY=', 1040, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A British merchant";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('w3xEd1tTdPk=', 1042, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A Dutch trader";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ucwOOkbJK7g=', 1044, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "An Italian missionary";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('0F0wdiBXIdQ=', 1046, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A Spanish pirate";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('qSUGgULZPhU=', 1046, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qSUGgULZPhU=', 1046, -1000, 1000),DecodeDecimal('MBsRWnIEO5Q=', 1046, -1000, 1000),DecodeDecimal('MBsRWnIEO5Q=', 1046, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 3What new venture does Crusoe undertake after being rescued?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('qSUGgULZPhU=', 1048, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He starts a sugar plantation";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nrM2m75Sbok=', 1050, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He trades weapons and salt";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('z7yXW67+WGU=', 1052, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He travels to Brazil to be a planter";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z7yXW67+WGU=', 1054, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He builds a ship for exploration";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('2NDJ0yXDH+s=', 1056, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "He becomes a ship captain";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('STg5C9qa7UM=', 1056, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('STg5C9qa7UM=', 1056, -1000, 1000),DecodeDecimal('ZZ5TCH8H18Y=', 1056, -1000, 1000),DecodeDecimal('ZZ5TCH8H18Y=', 1056, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 3What disaster befalls Crusoe on his voyage in chapter 2?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('STg5C9qa7UM=', 1058, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The crew mutinies and kills the captain";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('28c5hmFsrCc=', 1060, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They are captured by the French navy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BUcY/QHLdsA=', 1062, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The ship is wrecked in a storm";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BUcY/QHLdsA=', 1064, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A fire destroys the cargo";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('lpslOrWBRG4=', 1066, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A storm drives the ship to the Arctic";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('d6YuKw4lOHU=', 1066, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('d6YuKw4lOHU=', 1066, -1000, 1000),DecodeDecimal('YdnUr5hqLFg=', 1066, -1000, 1000),DecodeDecimal('YdnUr5hqLFg=', 1066, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 3Where does Crusoe wash ashore?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('/OCpN9j5r+U=', 1068, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "On a desert island";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/OCpN9j5r+U=', 1070, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Near the Canary Islands";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CmPbR9T7+5s=', 1072, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "On the coast of Africa";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cK9bLiR7CRM=', 1074, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "On a Portuguese outpost";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('i9nYtOeO5Dg=', 1076, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "On a coastal town in Brazil";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('3X8kxEwt4Co=', 1076, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3X8kxEwt4Co=', 1076, -1000, 1000),DecodeDecimal('WYyA2BVrpZE=', 1076, -1000, 1000),DecodeDecimal('WYyA2BVrpZE=', 1076, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 4What does Crusoe find when he returns to the wrecked ship?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('3X8kxEwt4Co=', 1078, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "There is nothing useful left";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PrAcf+aeNlw=', 1080, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Only dead bodies and debris";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7S4iDTBHmU0=', 1082, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Many useful supplies and tools";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7S4iDTBHmU0=', 1084, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A secret stash of treasure";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('ui2oJ1ofG5o=', 1086, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "All supplies are burned";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('tU3SASMvfDg=', 1086, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tU3SASMvfDg=', 1086, -1000, 1000),DecodeDecimal('s98oq7eldRI=', 1086, -1000, 1000),DecodeDecimal('s98oq7eldRI=', 1086, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 4What ultimately happens to the wrecked ship?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('tU3SASMvfDg=', 1088, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It drifts out to sea";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('A1Lu9OKISBk=', 1090, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Crusoe burns it for firewood";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('40+AqUfqiPk=', 1092, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It is broken apart by a storm";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('40+AqUfqiPk=', 1094, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It is hidden by the tide";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('aaf8WUhwUeQ=', 1096, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "It is looted by other sailors";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('VaAP7xKj388=', 1096, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VaAP7xKj388=', 1096, -1000, 1000),DecodeDecimal('P4Qb2RouWhk=', 1096, -1000, 1000),DecodeDecimal('P4Qb2RouWhk=', 1096, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 4Where does Crusoe decide to build his shelter?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('8E8XqczgaPo=', 1098, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "On a hill overlooking the sea";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8E8XqczgaPo=', 1100, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Beside the wrecked ship";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xZQpiHQo34c=', 1102, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "In a cave near the beach";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('N4KEPVffzvA=', 1104, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "In a valley with a stream";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('uT0NjqixirY=', 1106, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Near the water's edge";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('/ySdCVZhkbA=', 1106, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/ySdCVZhkbA=', 1106, -1000, 1000),DecodeDecimal('LLOIo9RzJC0=', 1106, -1000, 1000),DecodeDecimal('LLOIo9RzJC0=', 1106, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 5What kind of structure does Crusoe build for shelter?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('LrinQWpePwk=', 1108, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A tent made of sailcloth and wood";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LrinQWpePwk=', 1110, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A treehouse using ship planks";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Epq5mSQ7AA8=', 1112, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A cave reinforced with wooden beams";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9U2pxvXFDVk=', 1114, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A stone hut with a lookout tower";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('iTvhX39cfEw=', 1116, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A log cabin with two floors";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('R3mgu4Iq1DQ=', 1116, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('R3mgu4Iq1DQ=', 1116, -1000, 1000),DecodeDecimal('RnUNuJ7r1Sk=', 1116, -1000, 1000),DecodeDecimal('RnUNuJ7r1Sk=', 1116, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 5What tool does Crusoe especially value for survival?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('R3mgu4Iq1DQ=', 1118, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A telescope";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Qu3On+GZEZY=', 1120, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A musket";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mbGSClMh1Zk=', 1122, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A hatchet";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mbGSClMh1Zk=', 1124, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A shovel";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('/KA7Pc0Ta6A=', 1126, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A compass";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('pkyD56as4N0=', 1126, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pkyD56as4N0=', 1126, -1000, 1000),DecodeDecimal('qwA2vTYYt9o=', 1126, -1000, 1000),DecodeDecimal('qwA2vTYYt9o=', 1126, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 5What is Crusoe's attitude toward his situation at this point?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('oXCOH/XVYqE=', 1128, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Grateful and reflective";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oXCOH/XVYqE=', 1130, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Angry and bitter";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FYj7Tlpr0Oc=', 1132, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Energetic but anxious";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+Nje2WvuoAo=', 1134, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Suspicious and fearful";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('WVX7g3jq/D4=', 1136, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Entirely hopeless and depressed";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('7DfMGldLX84=', 1136, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7DfMGldLX84=', 1136, -1000, 1000),DecodeDecimal('bNLmWlqBOz8=', 1136, -1000, 1000),DecodeDecimal('bNLmWlqBOz8=', 1136, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 6What discovery worries Crusoe during exploration?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('9q87BmyiSRM=', 1138, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Cannibals' bones and skulls";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9q87BmyiSRM=', 1140, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A large wild cat";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hRuzHna1Q7U=', 1142, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A fresh stream nearby";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('K/imvkPCmpM=', 1144, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A fire in the forest";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('WGsyg2eJGpY=', 1146, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Strange footprints on the shore";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
    var weight = DecodeNumber('kbYwelhgVo4=', 1146, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kbYwelhgVo4=', 1146, -1000, 1000),DecodeDecimal('zstuseMC4vw=', 1146, -1000, 1000),DecodeDecimal('zstuseMC4vw=', 1146, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 6How does Crusoe seek comfort while ill?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('kbYwelhgVo4=', 1148, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Talks to animals";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GzvuEb4rcZA=', 1150, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Writes poetry";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lxi7sTwhU/A=', 1152, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Drinks herbal tea";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rLA38q90+ik=', 1154, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Builds an altar";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('VTjQzGBQaeM=', 1156, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Reads the Bible";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('VTjQzGBQaeM=', 1156, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VTjQzGBQaeM=', 1156, -1000, 1000),DecodeDecimal('ecu9AqEfdQI=', 1156, -1000, 1000),DecodeDecimal('ecu9AqEfdQI=', 1156, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 6What plant does Crusoe cultivate?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VTjQzGBQaeM=', 1158, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Tobacco";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3qFAnP/ICVQ=', 1160, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Cocoa";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SvI+29YLeFo=', 1162, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Barley";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SvI+29YLeFo=', 1164, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Cotton ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('T0s5N+Sq7qA=', 1166, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Sugarcane";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
    var weight = DecodeNumber('aziiDW5v7Dk=', 1166, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aziiDW5v7Dk=', 1166, -1000, 1000),DecodeDecimal('qL1Ritni7us=', 1166, -1000, 1000),DecodeDecimal('qL1Ritni7us=', 1166, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 7What regular activity does Crusoe adopt?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('aziiDW5v7Dk=', 1168, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Marking the tides";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+anGZaLNVcU=', 1170, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Jogging at dawn";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uE2fJocmBR0=', 1172, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Reading Scripture";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uE2fJocmBR0=', 1174, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Drawing maps";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('KVquDJ/dNh4=', 1176, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Fishing each morning";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
    var weight = DecodeNumber('NyGTLrP1E/o=', 1176, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NyGTLrP1E/o=', 1176, -1000, 1000),DecodeDecimal('YAxZnEDrBxM=', 1176, -1000, 1000),DecodeDecimal('YAxZnEDrBxM=', 1176, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 7What issue does Crusoe face with grain?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('lZOC+LFQye0=', 1178, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He can't grind it";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lZOC+LFQye0=', 1180, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It?s stolen";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LIhcEuO9hlA=', 1182, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It gets moldy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5FlQfZrJgEI=', 1184, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It won?t dry properly";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('UBbmmWHg0rg=', 1186, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Rats destroy it";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
    var weight = DecodeNumber('RY0cEb/sB/s=', 1186, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RY0cEb/sB/s=', 1186, -1000, 1000),DecodeDecimal('9tmT2ErIuIY=', 1186, -1000, 1000),DecodeDecimal('9tmT2ErIuIY=', 1186, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 7How does Crusoe solve the grain problem?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('6th4TYABg5U=', 1188, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Crushes it with a log";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6th4TYABg5U=', 1190, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Invents a windmill";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r4GU9s0G4v8=', 1192, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Builds a stone grinder";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('q/L6YGbR52E=', 1194, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Learns to roast it";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('9JLH4PHgTsc=', 1196, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Constructs a hand mill";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 21;
    var weight = DecodeNumber('7HbHxdCHinQ=', 1196, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7HbHxdCHinQ=', 1196, -1000, 1000),DecodeDecimal('nMHIcEexWwE=', 1196, -1000, 1000),DecodeDecimal('nMHIcEexWwE=', 1196, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 8What animal does Crusoe successfully tame for food?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('+rE8x0B62Rg=', 1198, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Wild goats";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+rE8x0B62Rg=', 1200, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Rabbits";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RB7YRAlWpI4=', 1202, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Wild pigs";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CyBsdBABpBo=', 1204, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Parrots";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('WoHi3KRx5BA=', 1206, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Chickens";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 22;
    var weight = DecodeNumber('rRpMwV/s+Bo=', 1206, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rRpMwV/s+Bo=', 1206, -1000, 1000),DecodeDecimal('zABxzi+nsW0=', 1206, -1000, 1000),DecodeDecimal('zABxzi+nsW0=', 1206, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 8What challenge does he face with pottery?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('rRpMwV/s+Bo=', 1208, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Drying unevenly";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/HDcYuOIOxk=', 1210, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Cracking after rain";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Y7jFq2zkb5M=', 1212, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Exploding in fire";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Y7jFq2zkb5M=', 1214, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Melting in heat";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('3LEszx+Tk88=', 1216, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Shattering in the sun";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 23;
    var weight = DecodeNumber('4/w4942i30Y=', 1216, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4/w4942i30Y=', 1216, -1000, 1000),DecodeDecimal('3iKLVJ0us6o=', 1216, -1000, 1000),DecodeDecimal('3iKLVJ0us6o=', 1216, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 8How does he improve pottery durability?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('4DAMCXsvmmQ=', 1218, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Bakes it in fire pits";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4DAMCXsvmmQ=', 1220, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hardens with goat fat";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('C4xC+/OpbtE=', 1222, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Glazes it with wax";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WfEcxyYeiG8=', 1224, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Covers in ash";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('ZykQxQNNxmU=', 1226, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Uses sea salt in clay";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 24;
    var weight = DecodeNumber('SeAKWvP5q1A=', 1226, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SeAKWvP5q1A=', 1226, -1000, 1000),DecodeDecimal('41OuKiQatyo=', 1226, -1000, 1000),DecodeDecimal('41OuKiQatyo=', 1226, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 9What does Crusoe build to expand his territory?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('gCDJSNCNh98=', 1228, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A fence around a valley";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gCDJSNCNh98=', 1230, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A beacon tower";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EbLNqwMb2aw=', 1232, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A raft bridge";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZJZOzfOWD7w=', 1234, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A second house inland";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Ah+eKRRTsHg=', 1236, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A road system";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
    var weight = DecodeNumber('pM4wZJrk8p4=', 1236, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pM4wZJrk8p4=', 1236, -1000, 1000),DecodeDecimal('n+b0astbFfo=', 1236, -1000, 1000),DecodeDecimal('n+b0astbFfo=', 1236, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 9What tool does Crusoe miss most during carpentry? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Q7gEEEieI3Y=', 1238, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Saw";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q7gEEEieI3Y=', 1240, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Drill";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gRE+wZ7Xn6s=', 1242, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Level";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PttpWSWy6fo=', 1244, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Chisel";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('aSMjM27RlR0=', 1246, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Hammer";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
    var weight = DecodeNumber('0ZFpahGTUCA=', 1246, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0ZFpahGTUCA=', 1246, -1000, 1000),DecodeDecimal('kKC6Zf1FmhU=', 1246, -1000, 1000),DecodeDecimal('kKC6Zf1FmhU=', 1246, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 9How long did the boat project take?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('0ZFpahGTUCA=', 1248, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "One month";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rNML2vgm8R4=', 1250, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "One year";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rNML2vgm8R4=', 1252, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Six months";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PdxVDMkXepk=', 1254, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Two years";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('THslHbbLZ70=', 1256, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "One week";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 27;
    var weight = DecodeNumber('A7EZzGwM9L4=', 1256, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('A7EZzGwM9L4=', 1256, -1000, 1000),DecodeDecimal('FJXRfjcezZ8=', 1256, -1000, 1000),DecodeDecimal('FJXRfjcezZ8=', 1256, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 10What does he do after the quake?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('A7EZzGwM9L4=', 1258, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Rebuilds the cave stronger";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NLXRZJ06Voo=', 1260, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Sails around the island";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YyW4vtfLg2w=', 1262, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Abandons all farming";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UKgVMxaLm9k=', 1264, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hides his tools";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('VU31Wzfgd/Q=', 1266, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Leaves the cave permanently";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
    var weight = DecodeNumber('VU31Wzfgd/Q=', 1266, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VU31Wzfgd/Q=', 1266, -1000, 1000),DecodeDecimal('XyPMTyTW3/4=', 1266, -1000, 1000),DecodeDecimal('XyPMTyTW3/4=', 1266, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 10What frightens Crusoe while walking?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VU31Wzfgd/Q=', 1268, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Thunder";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sxt6x2QTVwU=', 1270, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A lion";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WysM3CvQGSU=', 1272, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A man?s footprint";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WysM3CvQGSU=', 1274, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A ghostly voice";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('YYrZ2lN/fWM=', 1276, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Strange shadows";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 29;
    var weight = DecodeNumber('U/irk7/UyqA=', 1276, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('U/irk7/UyqA=', 1276, -1000, 1000),DecodeDecimal('GZ403Mt1xtA=', 1276, -1000, 1000),DecodeDecimal('GZ403Mt1xtA=', 1276, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 10What does Crusoe fear this footprint means?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('U/irk7/UyqA=', 1278, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "His mind is playing tricks";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TKmb7ttg8Rw=', 1280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Pirates landed";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gIzkJ6pqz7I=', 1282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A lost sailor";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZnBJE4hEdIo=', 1284, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Wild beasts walk upright";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Zgqvkpgi6HA=', 1286, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Natives or cannibals nearby";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 30;
    var weight = DecodeNumber('Zgqvkpgi6HA=', 1286, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Zgqvkpgi6HA=', 1286, -1000, 1000),DecodeDecimal('R30n0uJp0Ow=', 1286, -1000, 1000),DecodeDecimal('R30n0uJp0Ow=', 1286, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 11What major concern occupies Crusoe's mind now?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Zgqvkpgi6HA=', 1288, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "His spiritual purity";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('98GyUSJex20=', 1290, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Being attacked while asleep";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('98GyUSJex20=', 1292, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The idea of rescue";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mUpTAk9lwO4=', 1294, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Running out of food";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('7boKqqikm6I=', 1296, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "His lack of ammunition";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 31;
    var weight = DecodeNumber('ExsKynFK7M8=', 1296, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ExsKynFK7M8=', 1296, -1000, 1000),DecodeDecimal('2h1YnHBCrxY=', 1296, -1000, 1000),DecodeDecimal('2h1YnHBCrxY=', 1296, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 11What new strategy does Crusoe employ for safety?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ExsKynFK7M8=', 1298, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Moving shelter locations";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/fjD4EUx2lA=', 1300, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Watching the coastline daily";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uSv93X9bjbo=', 1302, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Concealing his paths";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uSv93X9bjbo=', 1304, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Tying bells to fences";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Irw37ZMwj9U=', 1306, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Hiding during the day";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 32;
    var weight = DecodeNumber('Ldone0YzjWE=', 1306, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ldone0YzjWE=', 1306, -1000, 1000),DecodeDecimal('uADWa5BrWbI=', 1306, -1000, 1000),DecodeDecimal('uADWa5BrWbI=', 1306, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 11What does Crusoe observe in the distance one day?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('wS8D5fhV/g4=', 1308, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A column of smoke";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wS8D5fhV/g4=', 1310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A native village";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ogkoD7z/9S8=', 1312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A storm forming";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4+Yt72A+y3M=', 1314, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A floating barrel";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('tn9rnguSTtM=', 1316, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A battle between ships";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 33;
    var weight = DecodeNumber('zFxdTIy6n/s=', 1316, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zFxdTIy6n/s=', 1316, -1000, 1000),DecodeDecimal('vTJ/rHMYp6c=', 1316, -1000, 1000),DecodeDecimal('vTJ/rHMYp6c=', 1316, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 12How does Crusoe justify not attacking them?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('zFxdTIy6n/s=', 1318, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He lacks ammunition";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AOaw/2yLWvI=', 1320, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He fears retaliation";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/XY/ZOo9lsY=', 1322, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He accepts their customs";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/XY/ZOo9lsY=', 1324, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He waits for a better chance";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('laC5zZZhQaE=', 1326, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "He is outnumbered";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 34;
    var weight = DecodeNumber('y4q+7ICClcM=', 1326, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('y4q+7ICClcM=', 1326, -1000, 1000),DecodeDecimal('u1lr9x1zgmI=', 1326, -1000, 1000),DecodeDecimal('u1lr9x1zgmI=', 1326, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 12What deters Crusoe from killing the cannibals?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('y4q+7ICClcM=', 1328, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Their strange appearance";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H6ywCZNAiwY=', 1330, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Their numbers";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H6ywCZNAiwY=', 1332, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Their joyfulness";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Q0Kq0u4ke5E=', 1334, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Their weapons";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('9U/D//F+QJQ=', 1336, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Their speed";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 35;
    var weight = DecodeNumber('mdgJGIkEEyU=', 1336, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mdgJGIkEEyU=', 1336, -1000, 1000),DecodeDecimal('Vqw9gAzTVs0=', 1336, -1000, 1000),DecodeDecimal('Vqw9gAzTVs0=', 1336, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 12What inner conflict troubles Crusoe?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('mdgJGIkEEyU=', 1338, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hatred for his isolation";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Lcv2MtmKsGk=', 1340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Judging another culture";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Lcv2MtmKsGk=', 1342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Fear of going mad";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dDYRVrUCpJ4=', 1344, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Pride in his survival";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('9MzEBLrkGls=', 1346, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Guilt for killing animals";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 36;
    var weight = DecodeNumber('/QGBHEN+rao=', 1346, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/QGBHEN+rao=', 1346, -1000, 1000),DecodeDecimal('q0R2ARd15Ck=', 1346, -1000, 1000),DecodeDecimal('q0R2ARd15Ck=', 1346, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 13How does Crusoe rescue the man?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('GcDhXn1lZp0=', 1348, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Shoots the captors";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GcDhXn1lZp0=', 1350, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Ambushes the camp";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dD5TQEP309w=', 1352, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Charges with a spear";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qUboh3POj1g=', 1354, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Throws rocks";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('bJDhX+RQrrs=', 1356, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Uses traps and noise";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 37;
    var weight = DecodeNumber('+vm/snSrrMo=', 1356, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+vm/snSrrMo=', 1356, -1000, 1000),DecodeDecimal('sUbGAC8fqHk=', 1356, -1000, 1000),DecodeDecimal('sUbGAC8fqHk=', 1356, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 13Why is the name \"Friday\" chosen?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Olf8+nOAeIE=', 1358, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It?s the day they met";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Olf8+nOAeIE=', 1360, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It sounds strong";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7GFDoohV62A=', 1362, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It was a code word";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XHprhGUDDrY=', 1364, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It came to him in a dream";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('pNO7tlhk8rU=', 1366, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "It?s his own birthday";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 38;
    var weight = DecodeNumber('ZJtaWzvXVL0=', 1366, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZJtaWzvXVL0=', 1366, -1000, 1000),DecodeDecimal('ZpW0dr9UHgo=', 1366, -1000, 1000),DecodeDecimal('ZpW0dr9UHgo=', 1366, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 13 How does Friday behave toward Crusoe?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('CyCifmAqJwI=', 1368, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Loyal and grateful";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CyCifmAqJwI=', 1370, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Suspicious and slow";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gz70i+HAohc=', 1372, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Distant and quiet";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('suiCCxT37IM=', 1374, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Arrogant and greedy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('RKAUzafsvlA=', 1376, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Defiant and wild";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 39;
    var weight = DecodeNumber('dLaBZ2D57l0=', 1376, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dLaBZ2D57l0=', 1376, -1000, 1000),DecodeDecimal('DE/24Cxbo54=', 1376, -1000, 1000),DecodeDecimal('DE/24Cxbo54=', 1376, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 14What frightens Friday at first?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('dLaBZ2D57l0=', 1378, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The sound of thunder";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ME0x0bMf//k=', 1380, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Bible?s stories";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yELmedz310w=', 1382, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A musket being fired";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yELmedz310w=', 1384, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The cave?s darkness";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('pIHmQUmn2/A=', 1386, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "The sight of goats";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 40;
    var weight = DecodeNumber('u4vXpq/bMk4=', 1386, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('u4vXpq/bMk4=', 1386, -1000, 1000),DecodeDecimal('Qm/DUkRGZ9w=', 1386, -1000, 1000),DecodeDecimal('Qm/DUkRGZ9w=', 1386, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 14What surprise does Friday share about Spaniards?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('u4vXpq/bMk4=', 1388, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He speaks their language";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bWvmqJujens=', 1390, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He trusts them completely";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TwzZLIYGYcY=', 1392, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He has seen them before";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TwzZLIYGYcY=', 1394, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He once traded with them";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('c0RNl4IKmf0=', 1396, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "He has killed one";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 41;
    var weight = DecodeNumber('3qw3L88iRec=', 1396, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3qw3L88iRec=', 1396, -1000, 1000),DecodeDecimal('3KWG2fWonDU=', 1396, -1000, 1000),DecodeDecimal('3KWG2fWonDU=', 1396, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 14What moral concept does Crusoe teach Friday?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('3qw3L88iRec=', 1398, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Democracy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('icZerz8Hg7M=', 1400, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Courage";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ffYhS7RgFpw=', 1402, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Monotheism";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ffYhS7RgFpw=', 1404, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Literacy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('PresMYmWnQs=', 1406, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Justice";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 42;
    var weight = DecodeNumber('1QK8U6OWGUg=', 1406, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1QK8U6OWGUg=', 1406, -1000, 1000),DecodeDecimal('skVp9vhCXcM=', 1406, -1000, 1000),DecodeDecimal('skVp9vhCXcM=', 1406, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 15What emotional conflict arises for Crusoe?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('1QK8U6OWGUg=', 1408, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Jealousy over Friday?s strength";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sVJzkke+20Q=', 1410, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Anger at being questioned";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yBgUK5vfIrY=', 1412, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Fear of being alone again";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yBgUK5vfIrY=', 1414, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Doubt in Friday?s loyalty";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('SLHDv/Qpoc4=', 1416, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Guilt for keeping Friday";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 43;
    var weight = DecodeNumber('E+wWBS+6UYI=', 1416, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E+wWBS+6UYI=', 1416, -1000, 1000),DecodeDecimal('6HBXKX9e+Bg=', 1416, -1000, 1000),DecodeDecimal('6HBXKX9e+Bg=', 1416, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 15What does Friday suggest about the Spaniards?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('E+wWBS+6UYI=', 1418, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They are dead";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G5kt0JZxEAQ=', 1420, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They are enemies";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('35UcDhzMVTE=', 1422, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They can help";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('35UcDhzMVTE=', 1424, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They will rescue Crusoe";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('9I9UQDtefIQ=', 1426, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "They are kind";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 44;
    var weight = DecodeNumber('264T5UICs6g=', 1426, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('264T5UICs6g=', 1426, -1000, 1000),DecodeDecimal('cGPJVMdG2RU=', 1426, -1000, 1000),DecodeDecimal('cGPJVMdG2RU=', 1426, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 15How does Crusoe begin preparing for more visitors?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ddM55QnKlwY=', 1428, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Builds more huts";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ddM55QnKlwY=', 1430, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Expands the farm";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1NNYfYw4ejY=', 1432, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Sharpens weapons";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ykqzcGnfeow=', 1434, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Practices Spanish";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('1vaBHg5tRJU=', 1436, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Bakes extra bread";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 45;
    var weight = DecodeNumber('B38ERNBFks0=', 1436, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B38ERNBFks0=', 1436, -1000, 1000),DecodeDecimal('tEh48yK+0LA=', 1436, -1000, 1000),DecodeDecimal('tEh48yK+0LA=', 1436, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 16Who do Crusoe and Friday rescue?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('B38ERNBFks0=', 1438, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A Portuguese sailor";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Rnbhhk9E1dY=', 1440, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A priest";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('P5IpUA0ydQg=', 1442, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Friday?s father";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('P5IpUA0ydQg=', 1444, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A nobleman";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('BP2UbkUUp3c=', 1446, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "An Englishman";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 46;
    var weight = DecodeNumber('XPycZo7UPCY=', 1446, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XPycZo7UPCY=', 1446, -1000, 1000),DecodeDecimal('qqcUhPE8AQE=', 1446, -1000, 1000),DecodeDecimal('qqcUhPE8AQE=', 1446, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 16What does Crusoe give the rescued men?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('XPycZo7UPCY=', 1448, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Spears and shields";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4tiYBTSEBWI=', 809, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Blankets and oil";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wcqN0PYdAg0=', 811, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A Bible and shoes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JNWG1rf1MYw=', 813, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Weapons and gold";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('YaOo+/Ks0Bs=', 815, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Clothes and food";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 47;
    var weight = DecodeNumber('YaOo+/Ks0Bs=', 815, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YaOo+/Ks0Bs=', 815, -1000, 1000),DecodeDecimal('OO4Np1chkEc=', 815, -1000, 1000),DecodeDecimal('OO4Np1chkEc=', 815, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 16What emotional change happens in Crusoe?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('YaOo+/Ks0Bs=', 817, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He becomes jealous";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Sepbs955Lfg=', 819, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He resents the noise";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OIrbRos1b7I=', 821, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He worries about space";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7GSMRjHwKNg=', 823, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He feels protective";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('7GSMRjHwKNg=', 825, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "He distrusts Friday";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 48;
    var weight = DecodeNumber('Ht4us5j/8zY=', 825, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ht4us5j/8zY=', 825, -1000, 1000),DecodeDecimal('W/LPUVuHW7w=', 825, -1000, 1000),DecodeDecimal('W/LPUVuHW7w=', 825, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 17What does Crusoe decide to do?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Ht4us5j/8zY=', 827, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hide in his cave";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RScQSa0/i5k=', 829, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Help the captain";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RScQSa0/i5k=', 831, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Burn their boat";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vqFW4EEXFLI=', 833, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Alert the natives";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Py8VxwnW4YY=', 835, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Disguise himself";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 49;
    var weight = DecodeNumber('SRVPZGzCdNM=', 835, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SRVPZGzCdNM=', 835, -1000, 1000),DecodeDecimal('X4aztZQkyA4=', 835, -1000, 1000),DecodeDecimal('X4aztZQkyA4=', 835, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 17What disguise does Friday use?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('SRVPZGzCdNM=', 837, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A fallen sailor?s uniform";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zGG7JluY0Mg=', 839, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Crusoe?s clothes";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q7/XeuEigE0=', 841, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A pirate?s cloak";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fHVsT4iBJbY=', 843, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Paint and feathers";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('GlNeCzcv/Qo=', 845, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A goat skin";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 50;
    var weight = DecodeNumber('GlNeCzcv/Qo=', 845, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GlNeCzcv/Qo=', 845, -1000, 1000),DecodeDecimal('HOFu2s0eMzg=', 845, -1000, 1000),DecodeDecimal('HOFu2s0eMzg=', 845, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 17What deal does Crusoe make with the captain?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('GlNeCzcv/Qo=', 847, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Treasure in exchange for help";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('giBd/Ar03oE=', 849, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Rescue in return for loyalty";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('giBd/Ar03oE=', 851, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Weapons in return for the ship";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ftbPVJnaizw=', 853, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Shelter in return for food";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('iOJbhRL4F4s=', 855, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Freedom in return for Friday";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 51;
    var weight = DecodeNumber('Zjw6Cg1tgpg=', 855, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Zjw6Cg1tgpg=', 855, -1000, 1000),DecodeDecimal('3iaqTF/20VY=', 855, -1000, 1000),DecodeDecimal('3iaqTF/20VY=', 855, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 18What plan do Crusoe and the captain carry out?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Zjw6Cg1tgpg=', 857, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Poison the mutineers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XcXcuqrKIcA=', 859, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Burn the ship";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Hh6R5iHGthk=', 861, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Maroon the mutineers";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GtXvIqNZmSw=', 863, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Take the ship back";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('GtXvIqNZmSw=', 865, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Escape by raft";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion53()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 52;
    var weight = DecodeNumber('YyiqUbLRE7U=', 865, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YyiqUbLRE7U=', 865, -1000, 1000),DecodeDecimal('yu3ZHLHVOLA=', 865, -1000, 1000),DecodeDecimal('yu3ZHLHVOLA=', 865, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 18What date does Crusoe depart the island?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('YyiqUbLRE7U=', 867, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "September 1";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3jkz+Y31NSc=', 869, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "January 4";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('s97Tpm3redw=', 871, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "June 16";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('03rQe6lmTzQ=', 873, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "December 19";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('UC8fA+IDa98=', 875, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "November 5";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion54()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 53;
    var weight = DecodeNumber('UC8fA+IDa98=', 875, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UC8fA+IDa98=', 875, -1000, 1000),DecodeDecimal('gt1/PXT81W8=', 875, -1000, 1000),DecodeDecimal('gt1/PXT81W8=', 875, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 18What emotional state is Crusoe in as he leaves?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('UC8fA+IDa98=', 877, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Bitter and regretful";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rvnGT3tGq5E=', 879, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Thankful and awed";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rvnGT3tGq5E=', 881, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Confused and uncertain";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z2TixNRFCI4=', 883, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Calm and indifferent";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('ETD7l2Rb/iw=', 885, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Angry and fearful";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion55()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 54;
    var weight = DecodeNumber('c6/D0Ho0yas=', 885, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('c6/D0Ho0yas=', 885, -1000, 1000),DecodeDecimal('IEFrg9iSRWM=', 885, -1000, 1000),DecodeDecimal('IEFrg9iSRWM=', 885, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 19Where does Crusoe go first after leaving the island?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('c6/D0Ho0yas=', 887, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Spain";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QjcYvKkLBk4=', 889, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Lisbon";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QjcYvKkLBk4=', 891, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Morocco";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('B7ra7GsPZu0=', 893, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "England";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('9QVCuuq98jU=', 895, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Madeira";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion56()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 55;
    var weight = DecodeNumber('dNj8gK0IYm4=', 895, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dNj8gK0IYm4=', 895, -1000, 1000),DecodeDecimal('g0Lr0jz44IE=', 895, -1000, 1000),DecodeDecimal('g0Lr0jz44IE=', 895, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 19How is Friday treated in Europe?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('2qnjzbZLoxI=', 897, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "As a curiosity";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2qnjzbZLoxI=', 899, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "With equality";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WryAo2YsnWs=', 901, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "As royalty";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GrNCkAjL0x8=', 903, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "As an enemy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('y+5HdH+vBMo=', 905, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "With suspicion";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion57()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 56;
    var weight = DecodeNumber('09TK9e3t74c=', 905, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('09TK9e3t74c=', 905, -1000, 1000),DecodeDecimal('vb++0tKwPiE=', 905, -1000, 1000),DecodeDecimal('vb++0tKwPiE=', 905, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 19What is Crusoe's view of Europe now?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('0PPUL5vMhv8=', 907, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He misses the island";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0PPUL5vMhv8=', 909, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He wants to become a priest";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Lb9Zf7mU9s0=', 911, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He?s thrilled to stay";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BjQF0HKheFA=', 913, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He finds peace";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('IYSXQ5JCXKg=', 915, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "He buys a mansion";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion58()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 57;
    var weight = DecodeNumber('OVw/QZ0POew=', 915, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OVw/QZ0POew=', 915, -1000, 1000),DecodeDecimal('aZjnmLo8gEo=', 915, -1000, 1000),DecodeDecimal('aZjnmLo8gEo=', 915, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 20What does Crusoe finally do with his wealth?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('OVw/QZ0POew=', 917, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Donates to the poor";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WDpbshpLl/g=', 919, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Invests in plantations";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WDpbshpLl/g=', 921, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Buys a fleet of ships";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Uofj8DFtctU=', 923, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Builds a monastery";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('38SmKmevdDg=', 925, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Marries into nobility";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion59()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 58;
    var weight = DecodeNumber('sa+S52/KT9s=', 925, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sa+S52/KT9s=', 925, -1000, 1000),DecodeDecimal('HhA0F3/AYo4=', 925, -1000, 1000),DecodeDecimal('HhA0F3/AYo4=', 925, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 20What is Crusoe's role there now?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('sa+S52/KT9s=', 927, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Leader of the colony";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HKArU5JLgps=', 929, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Governor and judge";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AyoQpoVtilA=', 931, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Missionary and farmer";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wMNPxfWVVBI=', 933, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Visitor and advisor";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('wMNPxfWVVBI=', 935, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Teacher and builder";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion60()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 59;
    var weight = DecodeNumber('TfUJ6Qp4cB8=', 935, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TfUJ6Qp4cB8=', 935, -1000, 1000),DecodeDecimal('Eufk1/urSCs=', 935, -1000, 1000),DecodeDecimal('Eufk1/urSCs=', 935, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = true;
    question.shortTextQuestion = "Chapter 20What value does Crusoe emphasize in the end?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('TfUJ6Qp4cB8=', 937, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Wealth";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2G9/8TUw94A=', 939, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Faith";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2G9/8TUw94A=', 941, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Obedience";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vZY/TEwuRgs=', 943, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Adventure";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('zCNcOkWacEo=', 945, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Power";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion61()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 60;
    var weight = DecodeNumber('ke3DVmESxtE=', 945, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('u5DjOjTKE3Q=', 945, -1000, 1000),DecodeDecimal('v/061QwQPks=', 945, -1000, 1000),DecodeDecimal('v/061QwQPks=', 945, -1000, 1000));
    question.num = 61;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 4 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion62()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 61;
    var weight = DecodeNumber('BM/jhtzaqc0=', 955, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kqUgk1AfKAs=', 955, -1000, 1000),DecodeDecimal('ke3DVmESxtE=', 955, -1000, 1000),DecodeDecimal('ke3DVmESxtE=', 955, -1000, 1000));
    question.num = 62;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 14 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    const questionIndex = 0;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion3()
{
    const questionIndex = 2;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion17()
{
    const questionIndex = 16;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion18()
{
    const questionIndex = 17;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion19()
{
    const questionIndex = 18;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion20()
{
    const questionIndex = 19;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion21()
{
    const questionIndex = 20;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion22()
{
    const questionIndex = 21;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion23()
{
    const questionIndex = 22;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion24()
{
    const questionIndex = 23;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion25()
{
    const questionIndex = 24;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion26()
{
    const questionIndex = 25;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion27()
{
    const questionIndex = 26;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion28()
{
    const questionIndex = 27;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion29()
{
    const questionIndex = 28;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion30()
{
    const questionIndex = 29;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion31()
{
    const questionIndex = 30;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion32()
{
    const questionIndex = 31;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion33()
{
    const questionIndex = 32;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion34()
{
    const questionIndex = 33;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion35()
{
    const questionIndex = 34;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion36()
{
    const questionIndex = 35;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion37()
{
    const questionIndex = 36;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion38()
{
    const questionIndex = 37;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion39()
{
    const questionIndex = 38;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion40()
{
    const questionIndex = 39;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion41()
{
    const questionIndex = 40;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion42()
{
    const questionIndex = 41;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion43()
{
    const questionIndex = 42;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion44()
{
    const questionIndex = 43;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion45()
{
    const questionIndex = 44;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion46()
{
    const questionIndex = 45;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion47()
{
    const questionIndex = 46;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion48()
{
    const questionIndex = 47;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion49()
{
    const questionIndex = 48;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion50()
{
    const questionIndex = 49;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion51()
{
    const questionIndex = 50;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion53()
{
    const questionIndex = 52;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion54()
{
    const questionIndex = 53;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion55()
{
    const questionIndex = 54;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion56()
{
    const questionIndex = 55;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion57()
{
    const questionIndex = 56;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion58()
{
    const questionIndex = 57;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion59()
{
    const questionIndex = 58;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion60()
{
    const questionIndex = 59;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion61()
{
    const questionIndex = 60;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion62()
{
    const questionIndex = 61;
    ClearOpenAns(questionIndex);

}


/* Code generated function */
function UpdateCount61()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter60');
    counter.text(cs);
    $('#comment60').attr('maxlength',700+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}

/* Code generated function */
function UpdateCount62()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter61');
    counter.text(cs);
    $('#comment61').attr('maxlength',700+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}





