let body = document.getElementsByTagName('body');
//Cartoon mode
let cartoonMode = false;
toggleCartoon = () => {
    if (cartoonMode == false) {
        $(".img_size").css('opacity', '0');
        setTimeout(() => {
            $(".img_size").css('display', 'none');
            $(".img_size2").css('display', 'block');
            setTimeout(() => {
                $(".img_size2").css('opacity', '1');
            }, 300);
        }, 300);
        // $(".img_reg").css('opacity', '0');
        $(".img_reg").css('display', 'none');
        $(".img_reg2").css('display', 'block');
        // $(".img_reg2").css('opacity', '1');
        cartoonMode = true;
    }
    else {
        $(".img_size2").css('opacity', '0');
        setTimeout(() => {
            $(".img_size2").css('display', 'none');
            $(".img_size").css('display', 'block');
            setTimeout(() => {
                $(".img_size").css('opacity', '1');
            }, 300);
        }, 300);
        // $(".img_reg").css('opacity', '0');
        $(".img_reg").css('display', 'block');
        $(".img_reg2").css('display', 'none');
        // $(".img_reg2").css('opacity', '1');
        cartoonMode = false;
    }
}

//Togglers
toggleFaq = () => {
    $(".faq").toggleClass("faq_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleFaq2 = () => {
    $(".faq2").toggleClass("faq2_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleCode = () => {
    $(".domofon").toggleClass("code_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleRules = () => {
    $(".house_rules").toggleClass("rules_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleWelcome = () => {
    $(".welcome").toggleClass("welcome_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleKnock = () => {
    $(".can_knock").toggleClass("knock_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleKnock2 = () => {
    $(".can_knock2").toggleClass("knock_active2");
    $(".dark_bg").toggleClass("dark_active");
}
toggleEarphones = () => {
    $(".earphones").toggleClass("earphones_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleMirror = () => {
    $(".mirror").toggleClass("mirror_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleBalcony = () => {
    $(".balcony").toggleClass("balcony_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleOpera = () => {
    $(".opera").toggleClass("opera_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleNorthern = () => {
    $(".northern").toggleClass("northern_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleInstruction = () => {
    $(".instruction").toggleClass("instruction_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleDining = () => {
    $(".dining").toggleClass("dining_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleGames = () => {
    $(".games").toggleClass("games_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleTv = () => {
    $(".tv").toggleClass("tv_active");
    $(".dark_bg").toggleClass("dark_active");
}
toggleTv2 = () => {
    $(".tv2").toggleClass("tv2_active");
    $(".dark_bg").toggleClass("dark_active");
}
ghost3 = () => {
    $(".ghost3").animate({ left: '-4%' }, 'slow')
    setTimeout(() => {
        $(".ghost3").animate({ left: '-75%' })
    }, 4000);
}
//Kitchen
drinkingWater = () => {
    $(".facilities").animate({ left: '110%' })
    $(".facilities").animate({ left: '-110%' }, 1)
    setTimeout(() => {
        $(".facilities").css({ 'color': 'navy' })
        $(".facilities").html('Drinking Water');
    }, 400);
    $(".facilities").animate({ left: '4%' })
}
gas = () => {
    $(".facilities").animate({ left: '110%' })
    $(".facilities").animate({ left: '-110%' }, 1)
    setTimeout(() => {
        $(".facilities").css({ 'color': '#FF7700' })
        $(".facilities").html('Gas');
    }, 400);
    $(".facilities").animate({ left: '5%' })
}
boiler = () => {
    $(".facilities").animate({ left: '110%' })
    $(".facilities").animate({ left: '-110%' }, 1)
    setTimeout(() => {
        $(".facilities").css({ 'color': '#004492' })
        $(".facilities").html('Electric water boiler');
    }, 400);
    $(".facilities").animate({ left: '5%' })
}
microwave = () => {
    $(".facilities").animate({ left: '110%' })
    $(".facilities").animate({ left: '-110%' }, 1)
    setTimeout(() => {
        $(".facilities").css({ 'color': '#FF4F00' })
        $(".facilities").html('Microwave');
    }, 400);
    $(".facilities").animate({ left: '5%' })
}
plates = () => {
    $(".facilities").animate({ left: '110%' })
    $(".facilities").animate({ left: '-110%' }, 1)
    setTimeout(() => {
        $(".facilities").css({ 'color': '#FFF9AA' })
        $(".facilities").html('Plates, pans etc...');
    }, 400);
    $(".facilities").animate({ left: '5%' })
}
cups = () => {
    $(".facilities").animate({ left: '110%' })
    $(".facilities").animate({ left: '-110%' }, 1)
    setTimeout(() => {
        $(".facilities").css({ 'color': '#FFFBBF' })
        $(".facilities").html('Cups');
    }, 400);
    $(".facilities").animate({ left: '5%' })
}
heat = () => {
    $(".facilities").animate({ left: '110%' })
    $(".facilities").animate({ left: '-110%' }, 1)
    setTimeout(() => {
        $(".facilities").css({ 'color': 'red' })
        $(".facilities").html('Heat');
    }, 400);
    $(".facilities").animate({ left: '5%' })
}
ghost2 = () => {
    $(".ghost2").animate({ top: '-4%' }, 'slow')
    setTimeout(() => {
        $(".ghost2").animate({ top: '-45%' })
    }, 4000);
}
//Positions
window.onload = () => {
    setTimeout(() => {
        let a = 0;
        setInterval(() => {
            a++;
            if (a % 2 == 0 && a < 14) {
                $(".reminder").toggleClass("display_block");
            }
        }, 500);
    }, 1000);
    $(".facilities").animate({ left: '110%' })
};

//pos1

pos1_pos2 = () => {
    $(".pos1").css('opacity', '0');
    setTimeout(() => {
        $(".pos1").css('display', 'none');
        $(".pos2").css('display', 'block');
        setTimeout(() => {
            $(".pos2").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1_pos1l = () => {
    $(".pos1").css('opacity', '0');
    setTimeout(() => {
        $(".pos1").css('display', 'none');
        $(".pos1l").css('display', 'block');
        setTimeout(() => {
            $(".pos1l").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1_pos1r = () => {
    $(".pos1").css('opacity', '0');
    setTimeout(() => {
        $(".pos1").css('display', 'none');
        $(".pos1r").css('display', 'block');
        setTimeout(() => {
            $(".pos1r").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1l_pos1 = () => {
    $(".pos1l").css('opacity', '0');
    setTimeout(() => {
        $(".pos1l").css('display', 'none');
        $(".pos1").css('display', 'block');
        setTimeout(() => {
            $(".pos1").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1r_pos1 = () => {
    $(".pos1r").css('opacity', '0');
    setTimeout(() => {
        $(".pos1r").css('display', 'none');
        $(".pos1").css('display', 'block');
        setTimeout(() => {
            $(".pos1").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1r_pos1t = () => {
    $(".pos1r").css('opacity', '0');
    setTimeout(() => {
        $(".pos1r").css('display', 'none');
        $(".pos1t").css('display', 'block');
        setTimeout(() => {
            $(".pos1t").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1r_pos1l = () => {
    $(".pos1r").css('opacity', '0');
    setTimeout(() => {
        $(".pos1r").css('display', 'none');
        $(".pos1l").css('display', 'block');
        setTimeout(() => {
            $(".pos1l").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1r_pos6 = () => {
    $(".pos1r").css('opacity', '0');
    setTimeout(() => {
        $(".pos1r").css('display', 'none');
        $(".pos6").css('display', 'block');
        setTimeout(() => {
            $(".pos6").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1l_pos1r = () => {
    $(".pos1l").css('opacity', '0');
    setTimeout(() => {
        $(".pos1l").css('display', 'none');
        $(".pos1r").css('display', 'block');
        setTimeout(() => {
            $(".pos1r").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1l_pos2 = () => {
    $(".pos1l").css('opacity', '0');
    setTimeout(() => {
        $(".pos1l").css('display', 'none');
        $(".pos2").css('display', 'block');
        setTimeout(() => {
            $(".pos2").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1r_pos2 = () => {
    $(".pos1r").css('opacity', '0');
    setTimeout(() => {
        $(".pos1r").css('display', 'none');
        $(".pos2").css('display', 'block');
        setTimeout(() => {
            $(".pos2").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1l_pos3 = () => {
    $(".pos1l").css('opacity', '0');
    setTimeout(() => {
        $(".pos1l").css('display', 'none');
        $(".pos3").css('display', 'block');
        setTimeout(() => {
            $(".pos3").css('opacity', '1');
        }, 300);
    }, 300);
}

//pos1t
pos1t2_pos1t = () => {
    $(".pos1t2").css('opacity', '0');
    setTimeout(() => {
        $(".pos1t2").css('display', 'none');
        $(".pos1t").css('display', 'block');
        setTimeout(() => {
            $(".pos1t").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1t_pos1r = () => {
    $(".pos1t").css('opacity', '0');
    setTimeout(() => {
        $(".pos1t").css('display', 'none');
        $(".pos1r").css('display', 'block');
        setTimeout(() => {
            $(".pos1r").css('opacity', '1');
        }, 300);
    }, 300);
}
pos1t_pos1t2 = () => {
    $(".pos1t").css('opacity', '0');
    setTimeout(() => {
        $(".pos1t").css('display', 'none');
        $(".pos1t2").css('display', 'block');
        setTimeout(() => {
            $(".pos1t2").css('opacity', '1');
        }, 300);
    }, 300);
    let a = 0;
    setInterval(() => {
        if (a % 2 && a <= 6) {
            $(".shine").css('display', 'block')
        }
        else {
            $(".shine").css('display', 'none')
            clearInterval();
        }
        a++;
    }, 800);
    setTimeout(() => {
        $(".ghost").animate({ left: '-30%' }, 2000);
    }, 7000);
    setTimeout(() => {
        $(".ghost").animate({ left: '-103%' }, 2000);
    }, 11000);
}
//pos2
pos2_pos1 = () => {
    $(".pos2").css('opacity', '0');
    setTimeout(() => {
        $(".pos2").css('display', 'none');
        $(".pos1").css('display', 'block');
        setTimeout(() => {
            $(".pos1").css('opacity', '1');
        }, 300);
    }, 300);
}
pos2_pos1l = () => {
    $(".pos2").css('opacity', '0');
    setTimeout(() => {
        $(".pos2").css('display', 'none');
        $(".pos1l").css('display', 'block');
        setTimeout(() => {
            $(".pos1l").css('opacity', '1');
        }, 300);
    }, 300);
}
pos2_pos1r = () => {
    $(".pos2").css('opacity', '0');
    setTimeout(() => {
        $(".pos2").css('display', 'none');
        $(".pos1r").css('display', 'block');
        setTimeout(() => {
            $(".pos1r").css('opacity', '1');
        }, 300);
    }, 300);
}
pos2_pos12 = () => {
    $(".pos2").css('opacity', '0');
    setTimeout(() => {
        $(".pos2").css('display', 'none');
        $(".pos12").css('display', 'block');
        setTimeout(() => {
            $(".pos12").css('opacity', '1');
        }, 300);
    }, 300);
}
//pos3
pos3_pos1l = () => {
    $(".pos3").css('opacity', '0');
    setTimeout(() => {
        $(".pos3").css('display', 'none');
        $(".pos1l").css('display', 'block');
        setTimeout(() => {
            $(".pos1l").css('opacity', '1');
        }, 300);
    }, 300);
}
pos3_pos4 = () => {
    $(".pos3").css('opacity', '0');
    setTimeout(() => {
        $(".pos3").css('display', 'none');
        $(".pos4").css('display', 'block');
        setTimeout(() => {
            $(".pos4").css('opacity', '1');
        }, 300);
    }, 300);
}
//pos4
pos4_pos3 = () => {
    $(".pos4").css('opacity', '0');
    setTimeout(() => {
        $(".pos4").css('display', 'none');
        $(".pos3").css('display', 'block');
        setTimeout(() => {
            $(".pos3").css('opacity', '1');
        }, 300);
    }, 300);
}
pos4_pos5 = () => {
    $(".pos4").css('opacity', '0');
    setTimeout(() => {
        $(".pos4").css('display', 'none');
        $(".pos5").css('display', 'block');
        setTimeout(() => {
            $(".pos5").css('opacity', '1');
        }, 300);
    }, 300);
}
//pos5
pos5_pos4 = () => {
    $(".pos5").css('opacity', '0');
    setTimeout(() => {
        $(".pos5").css('display', 'none');
        $(".pos4").css('display', 'block');
        setTimeout(() => {
            $(".pos4").css('opacity', '1');
        }, 300);
    }, 300);
}
//pos6
pos6_pos1r = () => {
    $(".pos6").css('opacity', '0');
    setTimeout(() => {
        $(".pos6").css('display', 'none');
        $(".pos1r").css('display', 'block');
        setTimeout(() => {
            $(".pos1r").css('opacity', '1');
        }, 300);
    }, 300);
}
pos6_pos7 = () => {
    $(".pos6").css('opacity', '0');
    setTimeout(() => {
        $(".pos6").css('display', 'none');
        $(".pos7").css('display', 'block');
        setTimeout(() => {
            $(".pos7").css('opacity', '1');
        }, 300);
    }, 300);
}
pos6_pos8 = () => {
    $(".pos6").css('opacity', '0');
    setTimeout(() => {
        $(".pos6").css('display', 'none');
        $(".pos8").css('display', 'block');
        setTimeout(() => {
            $(".pos8").css('opacity', '1');
        }, 300);
    }, 300);
}
pos6_pos9 = () => {
    $(".pos6").css('opacity', '0');
    setTimeout(() => {
        $(".pos6").css('display', 'none');
        $(".pos9").css('display', 'block');
        setTimeout(() => {
            $(".pos9").css('opacity', '1');
        }, 300);
    }, 300);
}
pos6_pos10 = () => {
    $(".pos6").css('opacity', '0');
    setTimeout(() => {
        $(".pos6").css('display', 'none');
        $(".pos10").css('display', 'block');
        setTimeout(() => {
            $(".pos10").css('opacity', '1');
        }, 300);
    }, 300);
}
//pos7
pos7_pos6 = () => {
    $(".pos7").css('opacity', '0');
    setTimeout(() => {
        $(".pos7").css('display', 'none');
        $(".pos6").css('display', 'block');
        setTimeout(() => {
            $(".pos6").css('opacity', '1');
        }, 300);
    }, 300);
    $(".facilities").animate({ left: '110%' }, 1)
}
//pos8
pos8_pos6 = () => {
    $(".pos8").css('opacity', '0');
    setTimeout(() => {
        $(".pos8").css('display', 'none');
        $(".pos6").css('display', 'block');
        setTimeout(() => {
            $(".pos6").css('opacity', '1');
        }, 300);
    }, 300);
    $(".facilities").animate({ left: '110%' }, 1)
}
pos8_pos9 = () => {
    $(".pos8").css('opacity', '0');
    setTimeout(() => {
        $(".pos8").css('display', 'none');
        $(".pos9").css('display', 'block');
        setTimeout(() => {
            $(".pos9").css('opacity', '1');
        }, 300);
    }, 300);
    $(".facilities").animate({ left: '110%' }, 1)
}
//pos9
pos9_pos6 = () => {
    $(".pos9").css('opacity', '0');
    setTimeout(() => {
        $(".pos9").css('display', 'none');
        $(".pos6").css('display', 'block');
        setTimeout(() => {
            $(".pos6").css('opacity', '1');
        }, 300);
    }, 300);
}
pos9_pos8 = () => {
    $(".pos9").css('opacity', '0');
    setTimeout(() => {
        $(".pos9").css('display', 'none');
        $(".pos8").css('display', 'block');
        setTimeout(() => {
            $(".pos8").css('opacity', '1');
        }, 300);
    }, 300);
}
//pos10
pos10_pos6 = () => {
    $(".pos10").css('opacity', '0');
    setTimeout(() => {
        $(".pos10").css('display', 'none');
        $(".pos6").css('display', 'block');
        setTimeout(() => {
            $(".pos6").css('opacity', '1');
        }, 300);
    }, 300);
}
pos10_pos11 = () => {
    $(".pos10").css('opacity', '0');
    setTimeout(() => {
        $(".pos10").css('display', 'none');
        $(".pos11").css('display', 'block');
        setTimeout(() => {
            $(".pos11").css('opacity', '1');
        }, 300);
    }, 300);
}
//pos11
pos11_pos10 = () => {
    $(".pos11").css('opacity', '0');
    setTimeout(() => {
        $(".pos11").css('display', 'none');
        $(".pos10").css('display', 'block');
        setTimeout(() => {
            $(".pos10").css('opacity', '1');
        }, 300);
    }, 300);
}
pos11_pos12 = () => {
    $(".pos11").css('opacity', '0');
    setTimeout(() => {
        $(".pos11").css('display', 'none');
        $(".pos12").css('display', 'block');
        setTimeout(() => {
            $(".pos12").css('opacity', '1');
        }, 300);
    }, 300);
}
//pos12
pos12_pos11 = () => {
    $(".pos12").css('opacity', '0');
    setTimeout(() => {
        $(".pos12").css('display', 'none');
        $(".pos11").css('display', 'block');
        setTimeout(() => {
            $(".pos11").css('opacity', '1');
        }, 300);
    }, 300);
}
pos12_pos2 = () => {
    $(".pos12").css('opacity', '0');
    setTimeout(() => {
        $(".pos12").css('display', 'none');
        $(".pos2").css('display', 'block');
        setTimeout(() => {
            $(".pos2").css('opacity', '1');
        }, 300);
    }, 300);
}