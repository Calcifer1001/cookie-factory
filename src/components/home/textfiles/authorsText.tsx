const author1Text = 'One of the most famous Cookie Makers in our Galaxy';
const author2Text = 'One of the most famous Cookie Makers in our Galaxy';
const author3Text = 'One of the most famous Cookie Makers in our Galaxy';
const author4Text = 'One of the most famous Cookie Makers in our Galaxy';
const author5Text = 'One of the most famous Cookie Makers in our Galaxy';

let authorList: Array<String> = [];

export function getAutorList() {
    authorList.push(author1Text);
    authorList.push(author2Text);
    authorList.push(author3Text);
    authorList.push(author4Text);
    authorList.push(author5Text);
    return authorList;
}