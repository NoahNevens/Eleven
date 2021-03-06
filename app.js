const PADDING = 0.35;
const TYPES = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const ADJACENT = [-1, 0, 1];
const SPACE = 3;
const LEVEL0 = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,];
const LEV1HPDAM = [1.0, 0.2, 0.05, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV1ENERGY = [1.0, 0.2, 0.05, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV1PURSUE = 0.99;
const LEV2HPDAM = [1.0, 0.6, 0.12, 0.05, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV2ENERGY = [1.0, 0.24, 0.08, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV2PURSUE = 0.92;
const LEV3HPDAM = [1.0, 0.9, 0.6, 0.12, 0.05, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV3ENERGY = [1.0, 0.28, 0.11, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV3PURSUE = 0.85;
const LEV4HPDAM = [1.0, 0.95, 0.75, 0.45, 0.12, 0.05, 0.001, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV4ENERGY = [1.0, 0.32, 0.14, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV4PURSUE = 0.78;
const LEV5HPDAM = [1.0, 0.99, 0.95, 0.75, 0.4, 0.15, 0.05, 0.001, 0, 0, 0, 0, 0, 0, 0];
const LEV5ENERGY = [1.0, 0.36, 0.17, 0.02, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV5PURSUE = 0.71;
const LEV6HPDAM = [1.0, 0.999, 0.99, 0.95, 0.75, 0.37, 0.12, 0.05, 0.001, 0, 0, 0, 0, 0, 0];
const LEV6ENERGY = [1.0, 0.4, 0.2, 0.03, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV6PURSUE = 0.64;
const LEV7HPDAM = [1.0, 1.0, 0.999, 0.99, 0.95, 0.6, 0.45, 0.2, 0.12, 0.05, 0.001, 0, 0, 0, 0];
const LEV7ENERGY = [1.0, 0.44, 0.23, 0.04, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV7PURSUE = 0.57;
const LEV8HPDAM = [1.0, 1.0, 0.999, 0.999, 0.99, 0.95, 0.6, 0.45, 0.2, 0.12, 0.05, 0.001, 0, 0, 0];
const LEV8ENERGY = [1.0, 0.48, 0.26, 0.05, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV8PURSUE = 0.5;
const LEV9HPDAM = [1.0, 1.0, 1.0, 0.999, 0.999, 0.99, 0.95, 0.6, 0.45, 0.2, 0.12, 0.05, 0.001, 0, 0];
const LEV9ENERGY = [1.0, 0.52, 0.29, 0.06, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV9PURSUE = 0.43;
const LEV10HPDAM = [1.0, 1.0, 1.0, 1.0, 0.999, 0.999, 0.99, 0.95, 0.6, 0.45, 0.2, 0.12, 0.05, 0.001, 0];
const LEV10ENERGY = [1.0, 0.56, 0.32, 0.07, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV10PURSUE = 0.36;
const LEV11HPDAM = [1.0, 1.0, 1.0, 1.0, 1.0, 0.999, 0.999, 0.99, 0.95, 0.6, 0.45, 0.2, 0.12, 0.05, 0.001];
const LEV11ENERGY = [1.0, 0.6, 0.35, 0.08, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const LEV11PURSUE = 0.29;
const HPDAM = [LEVEL0, LEV1HPDAM, LEV2HPDAM, LEV3HPDAM, LEV4HPDAM, LEV5HPDAM, LEV6HPDAM, LEV7HPDAM, LEV8HPDAM, LEV9HPDAM, LEV10HPDAM, LEV11HPDAM];
const ENERGY = [LEVEL0, LEV1ENERGY, LEV2ENERGY, LEV3ENERGY, LEV4ENERGY, LEV5ENERGY, LEV6ENERGY, LEV7ENERGY, LEV8ENERGY, LEV9ENERGY, LEV10ENERGY, LEV11ENERGY];
const PURSUE = [LEVEL0, LEV1PURSUE, LEV2PURSUE, LEV3PURSUE, LEV4PURSUE, LEV5PURSUE, LEV6PURSUE, LEV7PURSUE, LEV8PURSUE, LEV9PURSUE, LEV10PURSUE, LEV11PURSUE];

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var color_toggle = false;
var card_toggle = false;
var control_toggle = false;
var energy = 100;
var health = 100;
var yellow_chance = 0.7;
var time_out = false;
var move_scheme = ["KeyW", "KeyA", "KeyS", "KeyD"];
var player_pos = [5, 0];
var prev_player_pos = [100, 100];
var troph_pos = [5, 10];
var trophies = 0;
var resource_thresh = 0.95;
var enemy_thresh = 0.88;
var move_count = 0;
var valid_move = false;
var draw_count = 0;
var resource_list = [];
var resource_count = 0;
var enemy_list = [];
var enemy_count = 0;
var curr_level = 1;
var attack_turn = false;
var defense_turn = false;
var resources_warning = false;
var resources_warning2 = false;
var energy_warning = false;
var inspirit_toggle = false;
var regen_toggle = false;
var invest_toggle = false;
var battle_cry_toggle = false;
var ability_toggles = [inspirit_toggle, regen_toggle, invest_toggle, battle_cry_toggle];
var ability_opacities = ["#restoreEnergy", "#restoreHealth", "#increaseYellow", "#moreDamage"];
var curr_enemy;
var trophy_timer = 25;
var red_damage = 1;

var reds = 0;
var oranges = 0;
var yellows = 0;
var greens = 0;
var blues = 0;
var indigos = 0;
var violets = 0;
var type_counts = [0, 0, 0, 0, 0, 0, 0]
var red_attack_toggle = false;
var orange_attack_toggle = false;
var yellow_attack_toggle = false;
var green_attack_toggle = false;
var blue_attack_toggle = false;
var indigo_attack_toggle = false;
var violet_attack_toggle = false;
var type_toggle = [red_attack_toggle, orange_attack_toggle, yellow_attack_toggle, green_attack_toggle, blue_attack_toggle, indigo_attack_toggle, violet_attack_toggle];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
}

$("#colors").on("click", function(event) {
    event.preventDefault();
    time_out = true;
    $(".overlay").toggle();
    $("#colorInfo").toggle();
    color_toggle = true;
})

$("#cards").on("click", function(event) {
    event.preventDefault();
    time_out = true;
    $(".overlay").toggle();
    $("#cardInfo").toggle();
    card_toggle = true;
})

$("#controls").on("click", function(event) {
    event.preventDefault();
    time_out = true;
    $(".overlay").toggle();
    $("#controlInfo").toggle();
    control_toggle = true;
})

$(".overlay").on("click", function(event) {
    event.preventDefault();
    if (color_toggle) {
        time_out = false;
        $(".overlay").toggle();
        $("#colorInfo").toggle();
        color_toggle = false;
    } else if (card_toggle) {
        time_out = false;
        $(".overlay").toggle();
        $("#cardInfo").toggle();
        card_toggle = false;
    } else if (control_toggle) {
        time_out = false;
        $(".overlay").toggle();
        $("#controlInfo").toggle();
        control_toggle = false;
    }
})

$("#draw").on("click", function(event) {
    event.preventDefault();
    if (!time_out) {
        draw();
    }
})

function draw() {
    if (energy > 0 && draw_count > 0) {
        shuffleArray(colors);
        $("#cardHolder").css("background-color", colors[0]);
        updatePalette(colors[0], 1);
        energy--;
        updateEnergy();
        draw_count--;
        $("#drawInfo").text("Draws: " + draw_count);
    }
}
 
$("#storm").on("click", function(event) {
    event.preventDefault();
    health -= 20;
    energy -= 20;
    updateHealth();
    updateEnergy();
})

document.onkeydown = function(event) {
    if (!time_out) {
        if (move_scheme.includes(event.code)) {
            movePlayer(event.code);
        } else if (event.code === "KeyQ") {
            draw();
        } else if (event.code === "KeyZ") {
            abilityToggle(1);
        } else if (event.code === "KeyX") {
            abilityToggle(0);
        } else if (event.code === "KeyC") {
            abilityToggle(2);
        } else if (event.code === "KeyV") {
            abilityToggle(3);
        } else if (event.code === "KeyE") {
            abilityCast();
        }
    } else if (attack_turn) {
        if (event.code === "KeyR") {
            commitAttack();
        } else if (event.code === "KeyT") {
            changeToDefense();
        }
    } else if (defense_turn) {
        if (event.code === "KeyF") {
            console.log(defense_turn);
            commitBlock();
        } else if (event.code === "KeyG") {
            absorbAttack();
        }
    }
}

function movePlayer(code) {
    if (code === "KeyW" && player_pos[1] != 10) {
        $("#player").animate({top: '-=2.85vw'}, 60);
        $("#player").animate({top: '-=.15vw'}, 10);
        player_pos[1]++;
        prev_player_pos[0] = player_pos[0];
        prev_player_pos[1] = player_pos[1] - 1;
        valid_move = true;
    } else if (code === "KeyA" && player_pos[0] != 0) {
        $("#player").animate({left: '-=2.85vw'}, 60);
        $("#player").animate({left: '-=.15vw'}, 10);
        player_pos[0]--;
        prev_player_pos[0] = player_pos[0] + 1;
        prev_player_pos[1] = player_pos[1];
        valid_move = true;
    } else if (code === "KeyD" && player_pos[0] != 10) {
        $("#player").animate({left: '+=2.85vw'}, 60);
        $("#player").animate({left: '+=.15vw'}, 10);
        player_pos[0]++;
        prev_player_pos[0] = player_pos[0] - 1;
        prev_player_pos[1] = player_pos[1];
        valid_move = true;
    } else if (code === "KeyS" && player_pos[1] != 0) {
        $("#player").animate({top: '+=2.85vw'}, 60);
        $("#player").animate({top: '+=.15vw'}, 10);
        player_pos[1]--;
        prev_player_pos[0] = player_pos[0];
        prev_player_pos[1] = player_pos[1] + 1;
        valid_move = true;
    }

    if (coordEquality(player_pos, troph_pos)) {
        trophies++;
        trophy_timer = 25;
        energy += 2;
        $("#trophy").hide();
        updateTrophies();
    }

    enemyMove();
    if (enemyPresent(player_pos)) {
        attackEnemy(player_pos);
    }

    if (resourcePresent(player_pos)) {
        collectResource(player_pos);
    }

    if (valid_move) {
        trophy_timer--;
        if (trophy_timer < 1) {
            trophy_timer = 0;
            energy--;
        }

        $("#drawInfo").text("Draws: " + draw_count);

        if (Math.random() > resource_thresh) {
            newResource();
        }

        if (Math.random() > enemy_thresh && enemy_list.length < 15) {
            newEnemy();
        } else if (enemy_list.length === 15) {
            health--;
        }

        updateHealth();
        updateEnergy();
        valid_move = false;
    }
}

function newTrophy(trophy_position) {
    var coord;
    var curr_pos = trophy_position;
    var circuitBreaker = 0;
    do {
        circuitBreaker++;
        if (circuitBreaker > 170) {
            return;
        }
        coord = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)];
    } while (spaceOccupied(coord) || coordEquality(coord, curr_pos));
    troph_pos = coord;
    $("#trophy").css({left: troph_pos[0] * SPACE + PADDING + "vw", top: 30 - (troph_pos[1] * SPACE) + PADDING + "vw"});
    $("#trophy").show();
}

function updateEnergy() {
    if (energy > 100) {
        energy = 100;
    }
    $("#energyInfo").text("Energy: " + energy);
    if (energy < 50) {
        $("#energy").css("background", "linear-gradient(to left, rgb(136, 136, 136) " + (100 - energy) + "%, rgb(111, 111, 218) " + energy + "%");
    } else {
        $("#energy").css("background", "linear-gradient(to right, rgb(111, 111, 218) " + energy + "%, rgb(136, 136, 136) " + (100 - energy) + "%");
    }
}

function updateHealth() {
    if (health > 100) {
        health = 100;
    }
    $("#healthInfo").text("Health: " + health);
    if (health < 50) {
        $("#health").css("background", "linear-gradient(to left, rgb(136, 136, 136) " + (100 - health) + "%, rgb(224, 129, 129) " + health + "%");
    } else {
    $("#health").css("background", "linear-gradient(to right, rgb(224, 129, 129) " + health + "%, rgb(136, 136, 136) " + (100 - health) + "%");
    }

    if (health < 1) {
        time_out = true;
        $(".overlay").toggle();
        $("#lose").toggle();
    }
}

function coordEquality(coord1, coord2) {
    return coord1[0] === coord2[0] && coord1[1] === coord2[1];
}

function newResource() {
    var coord;
    var circuitBreaker = 0;
    do {
        circuitBreaker++;
        if (circuitBreaker > 170) {
            return;
        }
        coord = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)];
    } while (spaceOccupied(coord) || resourcePresent(coord));

    shuffleArray(colors);
    if (Math.random() > 0.5) {
        var mainColor = colors[0];
    } else {
        var mainColor = "black";
    }

    var resource = makeResource(coord, mainColor);
    var top_left = [resource.position[0] * SPACE + PADDING, 30 - (resource.position[1] * SPACE) + PADDING];
    $("#game").append('<div class="resource" id="r' + resource.id + '" style="top: ' + top_left[1] + 'vw; left: ' + top_left[0] + 'vw; display: none; background-color: ' + resource.type + ';"></div>');
    $("#r" + resource.id).fadeIn(80);
}

function makeResource(coord, color) {
    let resource = {
        id: resource_count,
        type: color,
        position: coord
    }
    resource_list.push(resource);
    resource_count++;
    return resource;
}

function spaceOccupied(coord) {
    return (coordEquality(player_pos, coord) || enemyPresent(coord));
}

function resourcePresent(coord) {
    for (var i = 0; i < resource_list.length; i++) {
        if (coordEquality(resource_list[i].position, coord)) {
            return true;
        }
    }
    return false;
}

function newEnemy() {
    let edge, space, coord, movement;
    let circuitBreaker = 0;
    do {
        circuitBreaker++;
        if (circuitBreaker > 170) {
            return;
        }
        edge = Math.floor(Math.random() * 4);
        space = Math.floor(Math.random() * 10);
        coord;
        movement;
        if (edge === 0) {
            coord = [space, 0];
            movement = "UP";
        } else if (edge === 1) {
            coord = [0, space + 1];
            movement = "RIGHT";
        } else if (edge === 2) {
            coord = [space + 1, 10];
            movement = "DOWN";
        } else {
            coord = [10, space];
            movement = "LEFT";
        }
    } while (distance(player_pos, coord) < 2 || spaceOccupied(coord) || resourcePresent(coord));
    shuffleArray(colors);
    var text_color = "white";
    if (colors[0] === "yellow") {
        text_color = "black";
    }
    var enemy = makeEnemy(coord, colors[0], curr_level, movement);
    var top_left = [enemy.position[0] * SPACE + PADDING, 30 - (enemy.position[1] * SPACE) + PADDING];
    $("#game").append('<div class="enemy" id="e' + enemy.id + '" style="top: ' + top_left[1] + 'vw; left: ' + top_left[0] + 'vw; display: none; background-color: ' + enemy.type + '; color: ' + text_color + ';">' + enemy.damage + '/' + enemy.health + '</div>');
    $("#e" + enemy.id).fadeIn(80);
}

function makeEnemy(coord, color, level, movement) {
    var hp = Math.random();
    var dam = Math.random();
    var ener = Math.random();
    let chosen_hp, chosen_dam, chosen_ener, chosen_pur;
    var index = 1;
    var index2 = 1;
    var index3 = 1;
    do {
        chosen_hp = index;
        index++;
    } while (HPDAM[level][index] > hp);
    do {
        chosen_dam = index2;
        index2++;
    } while (HPDAM[level][index2] > dam);
    do {
        chosen_ener = index3;
        index3++;
    } while (ENERGY[level][index3] > ener);
    if (Math.random() > PURSUE[level]) {
        chosen_pur = true;
    }
    let enemy = {
        id: enemy_count,
        position: coord,
        type: color,
        damage: chosen_dam,
        health: chosen_hp,
        energy: chosen_ener,
        pursuit: chosen_pur,
        movement: movement
    }
    enemy_list.push(enemy);
    enemy_count++;
    return enemy;
}

function distance(coord1, coord2) {
    return Math.sqrt(Math.pow(coord1[0] - coord2[0], 2) + Math.pow(coord1[1] - coord2[1], 2));
}

function enemyPresent(coord) {
    var enemies_at_location = 0;
    var enemy_length = enemy_list.length;
    for (var i = enemy_length - 1; i > -1; i--) {
        if (coordEquality(coord, enemy_list[i].position)) {
            enemies_at_location++;
            if (enemies_at_location > 1) {
                $("#e" + enemy_list[i].id).remove();
                enemy_list.splice(i, 1);
            }
        } else if (checkSwap(enemy_list[i])) {
            enemies_at_location++;
            if (enemies_at_location > 1) {
                $("#e" + enemy_list[i].id).remove();
                enemy_list.splice(i, 1);
            }
        }
    }
    if (enemies_at_location === 1) {
        return true;
    }
    return false;
}

function checkSwap(enemy) {
    var prev_pos = [200, 200];
    if (enemy.movement === "UP") {
        prev_pos[0] = enemy.position[0];
        prev_pos[1] = enemy.position[1] - 1;
    } else if (enemy.movement === "RIGHT") {
        prev_pos[0] = enemy.position[0] - 1;
        prev_pos[1] = enemy.position[1];
    } else if (enemy.movement === "LEFT") {
        prev_pos[0] = enemy.position[0] + 1;
        prev_pos[1] = enemy.position[1];
    } else if (enemy.movement === "DOWN") {
        prev_pos[0] = enemy.position[0];
        prev_pos[1] = enemy.position[1] + 1;
    }
    if (coordEquality(player_pos, prev_pos) && coordEquality(prev_player_pos, enemy.position)) {
        return true;
    }
}

function collectResource(coord) {
    for (var i = 0; i < resource_list.length; i++) {
        if (coordEquality(resource_list[i].position, coord)) {
            $("#r" + resource_list[i].id).remove();
            /*$("#r" + resource_list[i].id).fadeOut(70, function() {
            });*/
            if (resource_list[i].type === "black") {
                draw_count++;
            } else {
                updatePalette(resource_list[i].type, 1);
            }
            resource_list.splice(i, 1);
        }
    }
}

function updatePalette(color, adjustment) {
    if (color === "green") {
        type_counts[3] += adjustment;
    } else if (color === "red") {
        type_counts[0] += adjustment;
    } else if (color === "indigo") {
        type_counts[5] += adjustment;
    } else if (color === "orange") {
        type_counts[1] += adjustment;
    } else if (color === "blue") {
        type_counts[4] += adjustment;
    } else if (color === "violet") {
        type_counts[6] += adjustment;
    } else if (color === "yellow") {
        type_counts[2] += adjustment;
    }

    for (var i = 0; i < type_counts.length; i++) {
        if (type_counts[i] < 0) {
            type_counts[i] = 0;
        }
    }

    $("#hexagon1 .middle").text(type_counts[3]);
    $("#hexagon2 .middle").text(type_counts[0]);
    $("#hexagon3 .middle").text(type_counts[5]);  
    $("#hexagon4 .middle").text(type_counts[1]);
    $("#hexagon5 .middle").text(type_counts[4]);
    $("#hexagon6 .middle").text(type_counts[6]);
    $("#hexagon7 .middle").text(type_counts[2]);

    for (var i = 0; i < TYPES.length; i++) {
        $("#" + TYPES[i] + "Attack, #" + TYPES[i] + "Defense").text(type_counts[i]);
    }
}

function enemyMove() {
    for (var i = 0; i < enemy_list.length; i++) {
        if (enemy_list[i].pursuit) {
            enemyPursuit(enemy_list[i]);
        } 

        if (enemy_list[i].movement === "UP" && enemy_list[i].position[1] === 10) {
            enemy_list[i].movement = "DOWN";
        } else if (enemy_list[i].movement === "DOWN" && enemy_list[i].position[1] === 0) {
            enemy_list[i].movement = "UP";
        } else if (enemy_list[i].movement === "RIGHT" && enemy_list[i].position[0] === 10) {
            enemy_list[i].movement = "LEFT";
        } else if (enemy_list[i].movement === "LEFT" && enemy_list[i].position[0] === 0) {
            enemy_list[i].movement = "RIGHT";
        }
    
        if (enemy_list[i].movement === "UP") {
            $("#e" + enemy_list[i].id).animate({top: '-=2.85vw'}, 60);
            $("#e" + enemy_list[i].id).animate({top: '-=.15vw'}, 10);
            enemy_list[i].position[1]++;
        } else if (enemy_list[i].movement === "RIGHT") {
            $("#e" + enemy_list[i].id).animate({left: '+=2.85vw'}, 60);
            $("#e" + enemy_list[i].id).animate({left: '+=.15vw'}, 10);
            enemy_list[i].position[0]++;
        } else if (enemy_list[i].movement === "LEFT") {
            $("#e" + enemy_list[i].id).animate({left: '-=2.85vw'}, 60);
            $("#e" + enemy_list[i].id).animate({left: '-=.15vw'}, 10);
            enemy_list[i].position[0]--;
        } else if (enemy_list[i].movement === "DOWN") {
            $("#e" + enemy_list[i].id).animate({top: '+=2.85vw'}, 60);
            $("#e" + enemy_list[i].id).animate({top: '+=.15vw'}, 10);
            enemy_list[i].position[1]--;
        }
    }
}

function attackEnemy(coord) {
    for (var i = 0; i < enemy_list.length; i++) {
        if (coordEquality(coord, enemy_list[i].position) || checkSwap(enemy_list[i])) {
            time_out = true;
            $(".overlay").toggle();
            $(".attackPage").toggle();
            $("#enemyHealth").text("Health: " + enemy_list[i].health);
            $("#enemyDamage").text("Damage: " + enemy_list[i].damage);
            $("#enemyEnergy").text("Energy: " + enemy_list[i].energy);
            $("#enemyTypeBlock").css("background-color", enemy_list[i].type);
            $("#" + enemy_list[i].type + "Attack").css("display", "none"); 
            $("#" + enemy_list[i].type + "Defense").css("display", "");
            attack_turn = true;
            $("#attackBlock").css("opacity", 1.0);
            $("#defenseBlock").css("opacity", 0.5);
            curr_enemy = enemy_list[i];
        }
    }
}

$(".attackChoices").on("click", function(event) {
    event.preventDefault();
    if (attack_turn) {
        $("#commitAttack").css("opacity", 1.0);
        $(".attackChoices").css("opacity", 0.5);
        $(this).css("opacity", 1.0);
        var index = $(".attackChoices").index(this);
        for (var i = 0; i < type_toggle.length; i++) {
            type_toggle[i] = false;
        }
        type_toggle[index] = true;
    }
})

$(".defenseChoices").on("click", function(event) {
    event.preventDefault();
    if (defense_turn) {
        $("#commitBlock").css("opacity", 1.0);
        $(this).css("opacity", 1.0);
        var index = $(".defenseChoices").index(this);
        for (var i = 0; i < type_toggle.length; i++) {
            type_toggle[i] = false;
        }
        type_toggle[index] = true;
    }
})

$("#commitAttack").on("click", function(event) {
    event.preventDefault();
    if (attack_turn) {
        commitAttack();
    }
})

function commitAttack() {
    for (var i = 0; i < type_toggle.length; i++) {
        if (type_toggle[i]) {
            if (type_counts[i] > 0 && energy > 0) {
                updatePalette(TYPES[i], -1);
                type_toggle[i] = false;
                engage(TYPES[i]);
                changeToDefense();
            } else if (energy < 1 && !energy_warning) {
                energy_warning = true;
                $("#lowEnergy").toggle();
            } else if (type_counts[i] < 1 && !resources_warning) {
                resources_warning = true;
                $("#lowResources").toggle();
            }
        }
    }
}

$("#passAttack").on("click", function(event) {
    event.preventDefault();
    if (attack_turn) {
        changeToDefense();
    }
})

function changeToDefense() {
    $("#defenseBlock").css("opacity", 1.0);
    $("#attackBlock").css("opacity", 0.5);
    attack_turn = false;
    defense_turn = true;
    if (resources_warning) {
        $("#lowResources").toggle();
        resources_warning = false;
    } else if (energy_warning) {
        $("#lowEnergy").toggle();
        energy_warning = false;
    }
    $(".attackChoices").css("opacity", 0.5);
}

$("#commitBlock").on("click", function(event) {
    event.preventDefault();
    if (defense_turn) {
        commitBlock();
    }
})

function commitBlock() {
    for (var i = 0; i < type_toggle.length; i++) {
        if (type_toggle[i]) {
            if (type_counts[i] > 0) {
                updatePalette(TYPES[i], -1);
                type_toggle[i] = false;
                curr_enemy.energy--;
                $("#enemyEnergy").text("Energy: " + curr_enemy.energy);
                checkEnemy();
                changeToAttack();
            } else if (!resources_warning2) {
                resources_warning2 = true;
                $("#lowResources2").toggle();
            }
        }
    }
}

$("#absorbAttack").on("click", function(event) {
    event.preventDefault();
    if (defense_turn) {
        absorbAttack();
    }
})

function absorbAttack() {
    health -= curr_enemy.damage;
    updateHealth();
    curr_enemy.energy--;
    $("#enemyEnergy").text("Energy: " + curr_enemy.energy);
    checkEnemy();
    changeToAttack();
}

function changeToAttack() {
    $("#attackBlock").css("opacity", 1.0);
    $("#defenseBlock").css("opacity", 0.5);
    attack_turn = true;
    defense_turn = false;
    if (resources_warning) {
        $("#lowResources").toggle();
        resources_warning = false;
    } else if (resources_warning2) {
        $("#lowResources2").toggle();
        resources_warning2 = false;
    } else if (energy_warning) {
        $("#lowEnergy").toggle();
        energy_warning = false;
    }
    $(".defenseChoices").css("opacity", 0.5);
}

function engage(type) {
    if (type === "red") {
        curr_enemy.health -= red_damage;
    } else if (type === "orange") {
        var enemy_length = enemy_list.length;
        for (var i = 0; i < ADJACENT.length; i++) {
            for (var j = enemy_length - 1; j > -1; j--) {
                if (coordEquality([player_pos[0] + ADJACENT[i], player_pos[1]], enemy_list[j].position) || coordEquality([player_pos[0] + ADJACENT[i], player_pos[1] + ADJACENT[i]], enemy_list[j].position) || coordEquality([player_pos[0], player_pos[1] + ADJACENT[i]], enemy_list[j].position) || coordEquality([player_pos[0] - ADJACENT[i], player_pos[1] + ADJACENT[i]], enemy_list[j].position)) {
                    enemy_list[j].health--;
                }
            }
        }
    } else if (type === "yellow") {
        if (Math.random() > yellow_chance) {
            trophies++;
            trophy_timer = 25;
            energy += 2;
            $("#trophy").hide();
            updateTrophies();
        }
    } else if (type === "green") {
        health++;
    } else if (type === "blue") {
        energy++;
    } else if (type === "indigo") {
        resource_thresh -= 0.005;
    } else if (type === "violet") {
        if (curr_enemy.damage > 0) {
            curr_enemy.damage--;
            $("#enemyDamage").text("Damage: " + curr_enemy.damage);
        }
    }
    curr_enemy.health--;
    energy--;
    updateHealth();
    updateEnergy();
    $("#enemyHealth").text("Health: " + curr_enemy.health);
    checkEnemy();
}

function updateEnemies() {
    var enemy_length = enemy_list.length;
    for (var i = enemy_length - 1; i > -1; i--) {
        if (enemy_list[i].health < 1) {
            $("#e" + enemy_list[i].id).remove();
            enemy_list.splice(i, 1);
        } else {
            $("#e" + enemy_list[i].id).text(enemy_list[i].damage + "/" + enemy_list[i].health);
        }
    }
}

function checkEnemy() {
    if (curr_enemy.health < 1 || curr_enemy.energy < 1) {
        time_out = false;
        curr_enemy.health = 0;
        $(".overlay").toggle();
        $(".attackPage").toggle();
        $("#" + curr_enemy.type + "Attack").css("display", ""); 
        $("#" + curr_enemy.type + "Defense").css("display", "none");
        updateEnemies();
        attack_turn = false;
        defense_turn = false;
        $(".attackChoices, .defenseChoices").css("opacity", 0.5);
        if (resources_warning2) {
            resources_warning2 = false;
            $("#lowResources2").toggle();
        }
    }
}

function enemyPursuit(enemy) {
    if (coordEquality(enemy.position, player_pos)) {
        enemy.movement = "STAY";
    } else if (enemy.position[1] === player_pos[1]) {
        if (enemy.position[0] > player_pos[0]) {
            enemy.movement = "LEFT";
        } else if (enemy.position[0] < player_pos[0]) {
            enemy.movement = "RIGHT";
        }
    } else if (enemy.position[0] === player_pos[0]) {
        if (enemy.position[1] > player_pos[1]) {
            enemy.movement = "DOWN";
        } else if (enemy.position[1] < player_pos[1]) {
            enemy.movement = "UP";
        }
    } else {
        var x_delta = player_pos[0] - enemy.position[0];
        var y_delta = player_pos[1] - enemy.position[1];
        let angle = Math.atan((y_delta / x_delta)) * (180 / Math.PI);
        if (angle < 45 && angle > 0) {
            if (x_delta > 0) {
                enemy.movement = "RIGHT";
            } else {
                enemy.movement = "LEFT";
            }
        } else if (angle > 45 && angle < 90) {
            if (x_delta > 0) {
                enemy.movement = "UP";
            } else {
                enemy.movement = "DOWN";
            }
        } else if (angle < 0 && angle > -45) {
            if (x_delta > 0) {
                enemy.movement = "RIGHT";
            } else {
                enemy.movement = "LEFT";
            }
        } else if (angle < -45 && angle > -90) {
            if (x_delta > 0) {
                enemy.movement = "DOWN";
            } else {
                enemy.movement = "UP";
            }
        } else if (angle === 45) {
            if (x_delta > 0) {
                if (Math.random() > 0.5) {
                    enemy.movement = "UP";
                } else {
                    enemy.movement = "RIGHT";
                }
            } else {
                if (Math.random() > 0.5) {
                    enemy.movement = "DOWN";
                } else {
                    enemy.movement = "LEFT";
                }
            }
        } else if (angle === -45) {
            if (x_delta > 0) {
                if (Math.random() > 0.5) {
                    enemy.movement = "DOWN";
                } else {
                    enemy.movement = "RIGHT";
                }
            } else {
                if (Math.random() > 0.5) {
                    enemy.movement = "UP";
                } else {
                    enemy.movement = "LEFT";
                }
            }
        }
    }
}

function updateTrophies() {
    $("#trophyInfo").text("Trophies: " + trophies + " / 11");
    if (trophies === 11) {
        if (curr_level === 11) {
            time_out = true;
            $(".overlay").toggle();
            $("#win").toggle();
        }
        trophies = 0;
        $("#trophyInfo").text("Trophies: " + trophies + " / 11");
        curr_level++
        $("#currentLevel").text("Level: " + curr_level);
        var enemy_length = enemy_list.length;
        for (var i = enemy_length - 1; i > -1; i--) {
            $("#e" + enemy_list[i].id).remove();
            enemy_list.splice(i, 1);
        }
    }
    newTrophy(troph_pos);
}

$(".card").on("click", function(event) {
    event.preventDefault();
    var index = $(".card").index(this);
    abilityToggle(index);
})

function abilityToggle(index) {
    for (var i = 0; i < ability_toggles.length; i++) {
        if (i === index && !ability_toggles[i]) {
            ability_toggles[i] = true;
            $(ability_opacities[i]).css("background-color", "rgb(60, 60, 60)");
        } else if (i === index && ability_toggles[i]) {
            ability_toggles[i] = false;
            $(ability_opacities[i]).css("background-color", "rgb(100, 100, 100)");
        } else {
            ability_toggles[i] = false;
            $(ability_opacities[i]).css("background-color", "rgb(100, 100, 100)");
        }
    }
}

$("#save").on("click", function(event) {
    event.preventDefault();
    abilityCast();
})

function abilityCast() {
    if (ability_toggles[0]) {
        if (abilityValid(10)) {
            var missing_energy = Math.floor(((100 - energy) / 4) * 3);
            energy += missing_energy;
            updateEnergy(); 
            randomResourceUse(10);
            $("#energyNotif").fadeIn(100).fadeOut(100);
        }
        ability_toggles[0] = false;
        $(ability_opacities[0]).css("background-color", "rgb(100, 100, 100)");
    } else if (ability_toggles[1]) {
        if (abilityValid(10)) {
            var missing_health = Math.floor((100 - health) / 2);
            health += missing_health;
            updateHealth(); 
            randomResourceUse(10);
            $("#healthNotif").fadeIn(100).fadeOut(100);
        }
        ability_toggles[1] = false;
        $(ability_opacities[1]).css("background-color", "rgb(100, 100, 100)");
    } else if (ability_toggles[2]) {
        if (abilityValid(2)) {
            yellow_chance--;
            randomResourceUse(2);
            $("#yellowNotif").fadeIn(500).fadeOut(500);
        }
        ability_toggles[2] = false;
        $(ability_opacities[2]).css("background-color", "rgb(100, 100, 100)");
    } else if (ability_toggles[3]) {
        if (abilityValid(12)) {
            red_damage++;
            randomResourceUse(12);
            $("#redNotif").fadeIn(100).fadeOut(100);
        }
        ability_toggles[3] = false;
        $(ability_opacities[3]).css("background-color", "rgb(100, 100, 100)");
    }
}

function abilityValid(cost) {
    for (var i = 0; i < type_counts.length; i++) {
        if (type_counts[i] === cost || type_counts[i] > cost) {
            return true;
        }
    }
    return false;
}

function randomResourceUse(cost) {
    var valid_types = []
    for (var i = 0; i < type_counts.length; i++) {
        if (type_counts[i] === cost || type_counts[i] > cost) {
            valid_types.push(TYPES[i]);
        }
    }
    var rand = Math.floor(Math.random() * valid_types.length);
    updatePalette(valid_types[rand], -cost);
}
