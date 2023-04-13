// 1.Create a HTML FORM with the following fields using DOM(functional approach)
// a.Firstname
// b.Middlename
// c.lastname
// e.email
// f.state-- >
function createElement(tagName, attrName, attrValue, content) {
  let element = document.createElement(tagName);
  element.setAttribute(attrName, attrValue);
  element.innerHTML = content;
  return element;
}
function lineBreaker(tagName) {
  let element = document.createElement(tagName)
  return element
}
function inputelement(tagName, attrName, attrValue, attrName1, attrValue2) {
  let element = document.createElement(tagName)
  element.setAttribute(attrName,attrValue)
  element.setAttribute(attrName1, attrValue2)
  return element;
}
var firstName = createElement("lable", "for", "firstname", "First Name")
var br = lineBreaker("br")
var firstNameInput = inputelement("input", "type", "text", "id", "firstname")
var br1 = lineBreaker("br")

var middleName = createElement("lable", "for", "middlename", "Middle Name")
var br2 = lineBreaker("br")
var middleNameInput = inputelement("input", "type", "text", "id", "middle name")
var br3 = lineBreaker("br")

var lastName = createElement("lable", "for", "lastname", "Last Name")
var br4 = lineBreaker("br")
var lastNameInput = inputelement("input", "type", "text", "id", "Last name")
var br5 = lineBreaker("br")

var Email = createElement("lable","for", "email","E mail"  )
var br6 = lineBreaker("br")
var EmailInput = inputelement("input", "type", "text", "id", "email")
var br7 = lineBreaker("br")

var state = createElement("lable", "for", "state", "State")
var br8 = lineBreaker("br")
var stateInput = inputelement("input", "text", "type", "State")
var br9 = lineBreaker("br")


document.body.append(firstName, br, firstNameInput, br1, middleName, br2, middleNameInput, br3, lastName, br4, lastNameInput,br5, Email, br6, EmailInput, br7, state, br8, stateInput, br9)