// importo la libreria per stampare la data
import dayjs from 'dayjs';


// Define a constructor function Answer to create one or more answers.
function Answer(response, respUsername, score=0, date, ) {
    this.response = response;
    this.respUsername = respUsername;
    this.score  =  score;
    this.date = dayjs(date);
}

// Define a constructor function Question
function Question(question, questUsername, date ) {
    this.question = question;
    this.questUsername = questUsername;
    this.date = dayjs(date);
    this.listAnswers  = [];

    //Implement methods to manipulate its answers:
    // add(answer) pass a fully-constructed Answer object
    this.add = (answer) =>{
        this.listAnswers.push(answer);
    }

    // find(username)  returns all the Answers of a given person
    this.find = (username) => {
        return this.listAnswers.filter(ans => ans.respUsername === username);
    }

    // afterDate(date) returns an array of Answers after the given date
    this.afterDate(date) = (date) => {
        return this.listAnswers.filter(ans => ans.date.isAfter(dayjs(date)));
    }

    //listByDate() returns an array of Answers, sorted by increasing date
    this.listByDate() = () => {
        return [...this.listAnswers].sort((a,b)=>{a.date.isAfter(b.date)});
    }

    // listByScore() // returns an array of Answers, sortedy decreasing score
    this.listByScore() = ()=>{
        return[...this.listAnswers].sort((a,b)=>b.score-a.score);
    }
}

// Create an instance of Question with at least four Answers in it.
const question = new Question("1000 metri fano un chilometro?","Daniele Minnelli","2024-07-18");
const risp1 = new Answer("No","user1","5","2024-07-17");
const risp2 = new Answer("No","user2","6","2024-07-16");
const risp3 = new Answer("No","user3","7","2024-07-15");
const risp4 = new Answer("No","user4","8","2024-07-14");

question.add(risp1);
question.add(risp2);
question.add(risp3);
question.add(risp4);

const risposta2 = question.find("user2");
console.log(question);
console.log('\nAnswers by Luca: ' + answersByLuca);
console.log('\nBy date: ' + question.listByDate());
console.log('\nBy score: ' + question.listByScore());
console.log('\nAfter 2024-07-16: ' + question.afterDate('2024-07-16'));