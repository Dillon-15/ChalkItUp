// Code by Dillon Barnett
// ChalkItUp short story

// imports the files we need
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';

// variable for console.log
const log = console.log;

// main function to start the chain because chalk and chalkAnimation wont work together nice.
main();

function main(){
    title();
}

// displays the title then runs actone card
function title(){
    const title = chalkAnimation.neon('The Great Chalk War 1957');

    setTimeout(() => {
        title.stop();
    }, 2000);

    setTimeout(() => {
        actone();
    }, 3000)
}

// displays the actonecard then runs actone
function actone(){
    const actone = chalkAnimation.rainbow('Act one');

    setTimeout(() => {
        actone.stop();
    }, 2000);

    setTimeout(() => {
        storyactone();
    }, 3000)
}

// displays the story in act one then runs acttwo card
function storyactone(){
    log(chalk.white.bold('To first under stand the great ') + chalk.red('war') + chalk.white.bold(' of 1957 we first have to look at August of 1956. Where the ') + chalk.blue('chalk') + chalk.white.bold(' shortage all started and now since ') + chalk.blue('chalk') + chalk.white.bold(' was now a valuable resources. Then ') + chalk.blue('chalk') + chalk.white.bold(' supply was found then with doing extensive research on ') + chalk.blue('chalk.'));

    setTimeout(() => {
        acttwo();
    }, 2000)
}

// displays the acttwo card then runs storyacttwo
function acttwo(){
    const acttwo = chalkAnimation.rainbow('Act two');

    setTimeout(() => {
        acttwo.stop();
    }, 2000);

    setTimeout(() => {
        storyacttwo();
    }, 3000)
}

// displays the story in act two then runs actthree card
function storyacttwo(){
    log(chalk.white.bold('With all the research they then found out that ') + chalk.blue('chalk') + chalk.white.bold(' can be used as ammo in weapons and then started the great ') + chalk.blue('chalk') + chalk.white.bold('. The ') + chalk.red('war') + chalk.white.bold(' lasted 3 ') + chalk.red('grueling') + chalk.white.bold(' years. And when the fighting finally stoped then all of the countries involved agreed to not use ')  + chalk.blue('chalk') + chalk.white.bold(' anymore.'))

    setTimeout(() => {
        actthree();
    }, 2000)
}

// displays the actthee card then runs storyactthree
function actthree(){
    const actthree = chalkAnimation.rainbow('Act three');

    setTimeout(() => {
        actthree.stop();
    }, 2000);

    setTimeout(() => {
        storyactthree();
    }, 3000)
}

// displays the story in act three then runs the end card
function storyactthree(){
    log(chalk.white.bold('Now I know what your thinking "that you have never heard of the great ') + chalk.blue('chalk')+ chalk.red(' war') + chalk.white.bold(' before" but it was such a bad ') + chalk.red('war') + chalk.white.bold(' that nobody every talks about anymore, even myself Im not one hundred percent sure it even happened. But there is one think I know for sure is that we better not run out of ') + chalk.blue('chalk') + chalk.white.bold(' every again.'))

    theend();
}

// displays the end card forever
function theend(){
    chalkAnimation.rainbow('The end');
}
