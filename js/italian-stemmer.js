// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function ItalianStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["", -1, 7],
        ["qu", 0, 6],
        ["\u00E1", 0, 1],
        ["\u00E9", 0, 2],
        ["\u00ED", 0, 3],
        ["\u00F3", 0, 4],
        ["\u00FA", 0, 5]
    ];

    /** @const */ var a_1 = [
        ["", -1, 3],
        ["I", 0, 1],
        ["U", 0, 2]
    ];

    /** @const */ var a_2 = [
        ["la", -1, -1],
        ["cela", 0, -1],
        ["gliela", 0, -1],
        ["mela", 0, -1],
        ["tela", 0, -1],
        ["vela", 0, -1],
        ["le", -1, -1],
        ["cele", 6, -1],
        ["gliele", 6, -1],
        ["mele", 6, -1],
        ["tele", 6, -1],
        ["vele", 6, -1],
        ["ne", -1, -1],
        ["cene", 12, -1],
        ["gliene", 12, -1],
        ["mene", 12, -1],
        ["sene", 12, -1],
        ["tene", 12, -1],
        ["vene", 12, -1],
        ["ci", -1, -1],
        ["li", -1, -1],
        ["celi", 20, -1],
        ["glieli", 20, -1],
        ["meli", 20, -1],
        ["teli", 20, -1],
        ["veli", 20, -1],
        ["gli", 20, -1],
        ["mi", -1, -1],
        ["si", -1, -1],
        ["ti", -1, -1],
        ["vi", -1, -1],
        ["lo", -1, -1],
        ["celo", 31, -1],
        ["glielo", 31, -1],
        ["melo", 31, -1],
        ["telo", 31, -1],
        ["velo", 31, -1]
    ];

    /** @const */ var a_3 = [
        ["ando", -1, 1],
        ["endo", -1, 1],
        ["ar", -1, 2],
        ["er", -1, 2],
        ["ir", -1, 2]
    ];

    /** @const */ var a_4 = [
        ["ic", -1, -1],
        ["abil", -1, -1],
        ["os", -1, -1],
        ["iv", -1, 1]
    ];

    /** @const */ var a_5 = [
        ["ic", -1, 1],
        ["abil", -1, 1],
        ["iv", -1, 1]
    ];

    /** @const */ var a_6 = [
        ["ica", -1, 1],
        ["logia", -1, 3],
        ["osa", -1, 1],
        ["ista", -1, 1],
        ["iva", -1, 9],
        ["anza", -1, 1],
        ["enza", -1, 5],
        ["ice", -1, 1],
        ["atrice", 7, 1],
        ["iche", -1, 1],
        ["logie", -1, 3],
        ["abile", -1, 1],
        ["ibile", -1, 1],
        ["usione", -1, 4],
        ["azione", -1, 2],
        ["uzione", -1, 4],
        ["atore", -1, 2],
        ["ose", -1, 1],
        ["ante", -1, 1],
        ["mente", -1, 1],
        ["amente", 19, 7],
        ["iste", -1, 1],
        ["ive", -1, 9],
        ["anze", -1, 1],
        ["enze", -1, 5],
        ["ici", -1, 1],
        ["atrici", 25, 1],
        ["ichi", -1, 1],
        ["abili", -1, 1],
        ["ibili", -1, 1],
        ["ismi", -1, 1],
        ["usioni", -1, 4],
        ["azioni", -1, 2],
        ["uzioni", -1, 4],
        ["atori", -1, 2],
        ["osi", -1, 1],
        ["anti", -1, 1],
        ["amenti", -1, 6],
        ["imenti", -1, 6],
        ["isti", -1, 1],
        ["ivi", -1, 9],
        ["ico", -1, 1],
        ["ismo", -1, 1],
        ["oso", -1, 1],
        ["amento", -1, 6],
        ["imento", -1, 6],
        ["ivo", -1, 9],
        ["it\u00E0", -1, 8],
        ["ist\u00E0", -1, 1],
        ["ist\u00E8", -1, 1],
        ["ist\u00EC", -1, 1]
    ];

    /** @const */ var a_7 = [
        ["isca", -1, 1],
        ["enda", -1, 1],
        ["ata", -1, 1],
        ["ita", -1, 1],
        ["uta", -1, 1],
        ["ava", -1, 1],
        ["eva", -1, 1],
        ["iva", -1, 1],
        ["erebbe", -1, 1],
        ["irebbe", -1, 1],
        ["isce", -1, 1],
        ["ende", -1, 1],
        ["are", -1, 1],
        ["ere", -1, 1],
        ["ire", -1, 1],
        ["asse", -1, 1],
        ["ate", -1, 1],
        ["avate", 16, 1],
        ["evate", 16, 1],
        ["ivate", 16, 1],
        ["ete", -1, 1],
        ["erete", 20, 1],
        ["irete", 20, 1],
        ["ite", -1, 1],
        ["ereste", -1, 1],
        ["ireste", -1, 1],
        ["ute", -1, 1],
        ["erai", -1, 1],
        ["irai", -1, 1],
        ["isci", -1, 1],
        ["endi", -1, 1],
        ["erei", -1, 1],
        ["irei", -1, 1],
        ["assi", -1, 1],
        ["ati", -1, 1],
        ["iti", -1, 1],
        ["eresti", -1, 1],
        ["iresti", -1, 1],
        ["uti", -1, 1],
        ["avi", -1, 1],
        ["evi", -1, 1],
        ["ivi", -1, 1],
        ["isco", -1, 1],
        ["ando", -1, 1],
        ["endo", -1, 1],
        ["Yamo", -1, 1],
        ["iamo", -1, 1],
        ["avamo", -1, 1],
        ["evamo", -1, 1],
        ["ivamo", -1, 1],
        ["eremo", -1, 1],
        ["iremo", -1, 1],
        ["assimo", -1, 1],
        ["ammo", -1, 1],
        ["emmo", -1, 1],
        ["eremmo", 54, 1],
        ["iremmo", 54, 1],
        ["immo", -1, 1],
        ["ano", -1, 1],
        ["iscano", 58, 1],
        ["avano", 58, 1],
        ["evano", 58, 1],
        ["ivano", 58, 1],
        ["eranno", -1, 1],
        ["iranno", -1, 1],
        ["ono", -1, 1],
        ["iscono", 65, 1],
        ["arono", 65, 1],
        ["erono", 65, 1],
        ["irono", 65, 1],
        ["erebbero", -1, 1],
        ["irebbero", -1, 1],
        ["assero", -1, 1],
        ["essero", -1, 1],
        ["issero", -1, 1],
        ["ato", -1, 1],
        ["ito", -1, 1],
        ["uto", -1, 1],
        ["avo", -1, 1],
        ["evo", -1, 1],
        ["ivo", -1, 1],
        ["ar", -1, 1],
        ["ir", -1, 1],
        ["er\u00E0", -1, 1],
        ["ir\u00E0", -1, 1],
        ["er\u00F2", -1, 1],
        ["ir\u00F2", -1, 1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2, 1];

    /** @const */ var /** Array<int> */ g_AEIO = [17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2];

    /** @const */ var /** Array<int> */ g_CG = [17];

    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_prelude() {
        var /** number */ among_var;
        // (, line 34
        // test, line 35
        var /** number */ v_1 = base.cursor;
        // repeat, line 35
        replab0: while(true)
        {
            var /** number */ v_2 = base.cursor;
            lab1: {
                // (, line 35
                // [, line 36
                base.bra = base.cursor;
                // substring, line 36
                among_var = base.find_among(a_0);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 36
                base.ket = base.cursor;
                switch (among_var) {
                    case 1:
                        // (, line 37
                        // <-, line 37
                        if (!base.slice_from("\u00E0"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 38
                        // <-, line 38
                        if (!base.slice_from("\u00E8"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 39
                        // <-, line 39
                        if (!base.slice_from("\u00EC"))
                        {
                            return false;
                        }
                        break;
                    case 4:
                        // (, line 40
                        // <-, line 40
                        if (!base.slice_from("\u00F2"))
                        {
                            return false;
                        }
                        break;
                    case 5:
                        // (, line 41
                        // <-, line 41
                        if (!base.slice_from("\u00F9"))
                        {
                            return false;
                        }
                        break;
                    case 6:
                        // (, line 42
                        // <-, line 42
                        if (!base.slice_from("qU"))
                        {
                            return false;
                        }
                        break;
                    case 7:
                        // (, line 43
                        // next, line 43
                        if (base.cursor >= base.limit)
                        {
                            break lab1;
                        }
                        base.cursor++;
                        break;
                }
                continue replab0;
            }
            base.cursor = v_2;
            break replab0;
        }
        base.cursor = v_1;
        // repeat, line 46
        replab2: while(true)
        {
            var /** number */ v_3 = base.cursor;
            lab3: {
                // goto, line 46
                golab4: while(true)
                {
                    var /** number */ v_4 = base.cursor;
                    lab5: {
                        // (, line 46
                        if (!(base.in_grouping(g_v, 97, 249)))
                        {
                            break lab5;
                        }
                        // [, line 47
                        base.bra = base.cursor;
                        // or, line 47
                        lab6: {
                            var /** number */ v_5 = base.cursor;
                            lab7: {
                                // (, line 47
                                // literal, line 47
                                if (!(base.eq_s("u")))
                                {
                                    break lab7;
                                }
                                // ], line 47
                                base.ket = base.cursor;
                                if (!(base.in_grouping(g_v, 97, 249)))
                                {
                                    break lab7;
                                }
                                // <-, line 47
                                if (!base.slice_from("U"))
                                {
                                    return false;
                                }
                                break lab6;
                            }
                            base.cursor = v_5;
                            // (, line 48
                            // literal, line 48
                            if (!(base.eq_s("i")))
                            {
                                break lab5;
                            }
                            // ], line 48
                            base.ket = base.cursor;
                            if (!(base.in_grouping(g_v, 97, 249)))
                            {
                                break lab5;
                            }
                            // <-, line 48
                            if (!base.slice_from("I"))
                            {
                                return false;
                            }
                        }
                        base.cursor = v_4;
                        break golab4;
                    }
                    base.cursor = v_4;
                    if (base.cursor >= base.limit)
                    {
                        break lab3;
                    }
                    base.cursor++;
                }
                continue replab2;
            }
            base.cursor = v_3;
            break replab2;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 52
        I_pV = base.limit;
        I_p1 = base.limit;
        I_p2 = base.limit;
        // do, line 58
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 58
            // or, line 60
            lab1: {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // (, line 59
                    if (!(base.in_grouping(g_v, 97, 249)))
                    {
                        break lab2;
                    }
                    // or, line 59
                    lab3: {
                        var /** number */ v_3 = base.cursor;
                        lab4: {
                            // (, line 59
                            if (!(base.out_grouping(g_v, 97, 249)))
                            {
                                break lab4;
                            }
                            // gopast, line 59
                            golab5: while(true)
                            {
                                lab6: {
                                    if (!(base.in_grouping(g_v, 97, 249)))
                                    {
                                        break lab6;
                                    }
                                    break golab5;
                                }
                                if (base.cursor >= base.limit)
                                {
                                    break lab4;
                                }
                                base.cursor++;
                            }
                            break lab3;
                        }
                        base.cursor = v_3;
                        // (, line 59
                        if (!(base.in_grouping(g_v, 97, 249)))
                        {
                            break lab2;
                        }
                        // gopast, line 59
                        golab7: while(true)
                        {
                            lab8: {
                                if (!(base.out_grouping(g_v, 97, 249)))
                                {
                                    break lab8;
                                }
                                break golab7;
                            }
                            if (base.cursor >= base.limit)
                            {
                                break lab2;
                            }
                            base.cursor++;
                        }
                    }
                    break lab1;
                }
                base.cursor = v_2;
                // (, line 61
                if (!(base.out_grouping(g_v, 97, 249)))
                {
                    break lab0;
                }
                // or, line 61
                lab9: {
                    var /** number */ v_6 = base.cursor;
                    lab10: {
                        // (, line 61
                        if (!(base.out_grouping(g_v, 97, 249)))
                        {
                            break lab10;
                        }
                        // gopast, line 61
                        golab11: while(true)
                        {
                            lab12: {
                                if (!(base.in_grouping(g_v, 97, 249)))
                                {
                                    break lab12;
                                }
                                break golab11;
                            }
                            if (base.cursor >= base.limit)
                            {
                                break lab10;
                            }
                            base.cursor++;
                        }
                        break lab9;
                    }
                    base.cursor = v_6;
                    // (, line 61
                    if (!(base.in_grouping(g_v, 97, 249)))
                    {
                        break lab0;
                    }
                    // next, line 61
                    if (base.cursor >= base.limit)
                    {
                        break lab0;
                    }
                    base.cursor++;
                }
            }
            // setmark pV, line 62
            I_pV = base.cursor;
        }
        base.cursor = v_1;
        // do, line 64
        var /** number */ v_8 = base.cursor;
        lab13: {
            // (, line 64
            // gopast, line 65
            golab14: while(true)
            {
                lab15: {
                    if (!(base.in_grouping(g_v, 97, 249)))
                    {
                        break lab15;
                    }
                    break golab14;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // gopast, line 65
            golab16: while(true)
            {
                lab17: {
                    if (!(base.out_grouping(g_v, 97, 249)))
                    {
                        break lab17;
                    }
                    break golab16;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // setmark p1, line 65
            I_p1 = base.cursor;
            // gopast, line 66
            golab18: while(true)
            {
                lab19: {
                    if (!(base.in_grouping(g_v, 97, 249)))
                    {
                        break lab19;
                    }
                    break golab18;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // gopast, line 66
            golab20: while(true)
            {
                lab21: {
                    if (!(base.out_grouping(g_v, 97, 249)))
                    {
                        break lab21;
                    }
                    break golab20;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // setmark p2, line 66
            I_p2 = base.cursor;
        }
        base.cursor = v_8;
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        var /** number */ among_var;
        // repeat, line 70
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 70
                // [, line 72
                base.bra = base.cursor;
                // substring, line 72
                among_var = base.find_among(a_1);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 72
                base.ket = base.cursor;
                switch (among_var) {
                    case 1:
                        // (, line 73
                        // <-, line 73
                        if (!base.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 74
                        // <-, line 74
                        if (!base.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 75
                        // next, line 75
                        if (base.cursor >= base.limit)
                        {
                            break lab1;
                        }
                        base.cursor++;
                        break;
                }
                continue replab0;
            }
            base.cursor = v_1;
            break replab0;
        }
        return true;
    };

    /** @return {boolean} */
    function r_RV() {
        if (!(I_pV <= base.cursor))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_R1() {
        if (!(I_p1 <= base.cursor))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_R2() {
        if (!(I_p2 <= base.cursor))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_attached_pronoun() {
        var /** number */ among_var;
        // (, line 86
        // [, line 87
        base.ket = base.cursor;
        // substring, line 87
        if (base.find_among_b(a_2) == 0)
        {
            return false;
        }
        // ], line 87
        base.bra = base.cursor;
        // among, line 97
        among_var = base.find_among_b(a_3);
        if (among_var == 0)
        {
            return false;
        }
        // (, line 97
        // call RV, line 97
        if (!r_RV())
        {
            return false;
        }
        switch (among_var) {
            case 1:
                // (, line 98
                // delete, line 98
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 99
                // <-, line 99
                if (!base.slice_from("e"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_standard_suffix() {
        var /** number */ among_var;
        // (, line 103
        // [, line 104
        base.ket = base.cursor;
        // substring, line 104
        among_var = base.find_among_b(a_6);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 104
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 111
                // call R2, line 111
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 111
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 113
                // call R2, line 113
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 113
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 114
                var /** number */ v_1 = base.limit - base.cursor;
                lab0: {
                    // (, line 114
                    // [, line 114
                    base.ket = base.cursor;
                    // literal, line 114
                    if (!(base.eq_s_b("ic")))
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    // ], line 114
                    base.bra = base.cursor;
                    // call R2, line 114
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    // delete, line 114
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
            case 3:
                // (, line 117
                // call R2, line 117
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 117
                if (!base.slice_from("log"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 119
                // call R2, line 119
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 119
                if (!base.slice_from("u"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 121
                // call R2, line 121
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 121
                if (!base.slice_from("ente"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 123
                // call RV, line 123
                if (!r_RV())
                {
                    return false;
                }
                // delete, line 123
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 7:
                // (, line 124
                // call R1, line 125
                if (!r_R1())
                {
                    return false;
                }
                // delete, line 125
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 126
                var /** number */ v_2 = base.limit - base.cursor;
                lab1: {
                    // (, line 126
                    // [, line 127
                    base.ket = base.cursor;
                    // substring, line 127
                    among_var = base.find_among_b(a_4);
                    if (among_var == 0)
                    {
                        base.cursor = base.limit - v_2;
                        break lab1;
                    }
                    // ], line 127
                    base.bra = base.cursor;
                    // call R2, line 127
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_2;
                        break lab1;
                    }
                    // delete, line 127
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    switch (among_var) {
                        case 1:
                            // (, line 128
                            // [, line 128
                            base.ket = base.cursor;
                            // literal, line 128
                            if (!(base.eq_s_b("at")))
                            {
                                base.cursor = base.limit - v_2;
                                break lab1;
                            }
                            // ], line 128
                            base.bra = base.cursor;
                            // call R2, line 128
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_2;
                                break lab1;
                            }
                            // delete, line 128
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                    }
                }
                break;
            case 8:
                // (, line 133
                // call R2, line 134
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 134
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 135
                var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    // (, line 135
                    // [, line 136
                    base.ket = base.cursor;
                    // substring, line 136
                    if (base.find_among_b(a_5) == 0)
                    {
                        base.cursor = base.limit - v_3;
                        break lab2;
                    }
                    // ], line 136
                    base.bra = base.cursor;
                    // (, line 137
                    // call R2, line 137
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_3;
                        break lab2;
                    }
                    // delete, line 137
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
            case 9:
                // (, line 141
                // call R2, line 142
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 142
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 143
                var /** number */ v_4 = base.limit - base.cursor;
                lab3: {
                    // (, line 143
                    // [, line 143
                    base.ket = base.cursor;
                    // literal, line 143
                    if (!(base.eq_s_b("at")))
                    {
                        base.cursor = base.limit - v_4;
                        break lab3;
                    }
                    // ], line 143
                    base.bra = base.cursor;
                    // call R2, line 143
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_4;
                        break lab3;
                    }
                    // delete, line 143
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // [, line 143
                    base.ket = base.cursor;
                    // literal, line 143
                    if (!(base.eq_s_b("ic")))
                    {
                        base.cursor = base.limit - v_4;
                        break lab3;
                    }
                    // ], line 143
                    base.bra = base.cursor;
                    // call R2, line 143
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_4;
                        break lab3;
                    }
                    // delete, line 143
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_verb_suffix() {
        // setlimit, line 148
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 148
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 148
        // [, line 149
        base.ket = base.cursor;
        // substring, line 149
        if (base.find_among_b(a_7) == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 149
        base.bra = base.cursor;
        // (, line 163
        // delete, line 163
        if (!base.slice_del())
        {
            return false;
        }
        base.limit_backward = v_2;
        return true;
    };

    /** @return {boolean} */
    function r_vowel_suffix() {
        // (, line 170
        // try, line 171
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 171
            // [, line 172
            base.ket = base.cursor;
            if (!(base.in_grouping_b(g_AEIO, 97, 242)))
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            // ], line 172
            base.bra = base.cursor;
            // call RV, line 172
            if (!r_RV())
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            // delete, line 172
            if (!base.slice_del())
            {
                return false;
            }
            // [, line 173
            base.ket = base.cursor;
            // literal, line 173
            if (!(base.eq_s_b("i")))
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            // ], line 173
            base.bra = base.cursor;
            // call RV, line 173
            if (!r_RV())
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            // delete, line 173
            if (!base.slice_del())
            {
                return false;
            }
        }
        // try, line 175
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // (, line 175
            // [, line 176
            base.ket = base.cursor;
            // literal, line 176
            if (!(base.eq_s_b("h")))
            {
                base.cursor = base.limit - v_2;
                break lab1;
            }
            // ], line 176
            base.bra = base.cursor;
            if (!(base.in_grouping_b(g_CG, 99, 103)))
            {
                base.cursor = base.limit - v_2;
                break lab1;
            }
            // call RV, line 176
            if (!r_RV())
            {
                base.cursor = base.limit - v_2;
                break lab1;
            }
            // delete, line 176
            if (!base.slice_del())
            {
                return false;
            }
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 181
        // do, line 182
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call prelude, line 182
            if (!r_prelude())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // do, line 183
        lab1: {
            // call mark_regions, line 183
            if (!r_mark_regions())
            {
                break lab1;
            }
        }
        // backwards, line 184
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 184
        // do, line 185
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call attached_pronoun, line 185
            if (!r_attached_pronoun())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 186
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // (, line 186
            // or, line 186
            lab4: {
                var /** number */ v_5 = base.limit - base.cursor;
                lab5: {
                    // call standard_suffix, line 186
                    if (!r_standard_suffix())
                    {
                        break lab5;
                    }
                    break lab4;
                }
                base.cursor = base.limit - v_5;
                // call verb_suffix, line 186
                if (!r_verb_suffix())
                {
                    break lab3;
                }
            }
        }
        base.cursor = base.limit - v_4;
        // do, line 187
        var /** number */ v_6 = base.limit - base.cursor;
        lab6: {
            // call vowel_suffix, line 187
            if (!r_vowel_suffix())
            {
                break lab6;
            }
        }
        base.cursor = base.limit - v_6;
        base.cursor = base.limit_backward;
        // do, line 189
        var /** number */ v_7 = base.cursor;
        lab7: {
            // call postlude, line 189
            if (!r_postlude())
            {
                break lab7;
            }
        }
        base.cursor = v_7;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
window['ItalianStemmer'] = ItalianStemmer;
