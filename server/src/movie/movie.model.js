const knex = require("../knex");
const movies = "movies";
require("dotenv").config({ path: "./.env.local" });

module.exports = {
    movies,

    getById(id) {
        return knex.select({
            id: "id",
            title: "title",
            genre: "genre",
            language: "language",
            overview: "overview",
            poster_link: "poster_link",
            year: "year"
        }).from(movies)
        .where({id: id})
        .first();
    },

    insert(movie) {
        return knex(movies)
        .insert([movie]);
    },

    getAll() {
        return knex.select({
            id: "id",
            title: "title",
            genre: "genre",
            language: "language",
            overview: "overview",
            poster_link: "poster_link",
            year: "year"
        }).from(movies)
    },
}