![WORLD QUIZ WORLD logo](https://user-images.githubusercontent.com/89664157/175447691-e9773084-7aad-4239-89df-b588206221e9.png)

React/JavaScript/CSS

[DEPLOYED SITE](https://world-quiz-world.herokuapp.com/)

[APP WALKTHROUGH](https://youtu.be/zqCPJJaqVRo)

[LIVE APP WALKTHROUGH](https://www.loom.com/share/51002d9349524e829a52706af99748da)

[BLOG: React Quiz with Unlimited Questions](https://dev.to/alternate_robot/react-quiz-with-unlimited-questions-32pi)

## Overview

Users can browse information about world countries using info from the RestCountries API. Web application includes information about all 195 countries of the world. It includes flag flashcards that can be filtered by continent, capital flashcards, a list of countries arranged by population size and continent. Users can also take four quizzes to test their knowledge, and save their high score.

## Backstory

Inspired by my 4 year-old son's love for country flags, I decided to create this project to help him learn and explore capitals, continents, and how many countries started with each letter of the alphabet. Taking the four quizzes available on this application, he got his high score up to 74 out of 100, including 25 out of 25 on the flag quiz. Not too shabby. It was an amazing experience to have him be the first tester of the site as it was being built, and spend many hours exploring and learning.

The was my first project built using React, with the additional goal of incorporating a complex outside API. World Quiz World uses the RestCountries API for all data. Thanks to all RestCountries contributors!

## Countries

The Countries section contains an section for each country, which includes the country's flag, population, official language(s), area, and name in the official language of the country. Users can search for a country, or filter countries by the first letter.

## Capitals

The Capitals section contains flashcards for each individual country. Upon load, each country's flag and name is displayed. When a user clicks on them, the country's capital is revealed. Users can toggle between the two.

## Continents

The Continents section displays the names and number of countries in each selected continent.

## Flags

The Flags section contains flashcards for each individual country. Upon load, each country's flag is displayed. When a user clicks on them, the country's name is revealed. Users can toggle between the two and filter the countries by continent.


## Population

The Population section contains an ordered list of countries by population size from largest to smallest. Users can create a list of countries that match a selected continent, as well as a selected population size range. 

## Quizzes

Users can take four separate quizzes: capitals, flags, population, and continents. Each quiz contains 25 questions. If a user enters a username, their highest score will be saved, and is accessed whenever the user enters their username. The total user score is a combination of the four quiz scores, and is displayed by the login bar. 

Background photo by Photo by <a href="https://unsplash.com/@marjan_blan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marjan Blan | @marjanblan</a> on <a href="https://unsplash.com/s/photos/world-map?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
