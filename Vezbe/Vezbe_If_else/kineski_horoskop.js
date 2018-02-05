/*
Rat: 2008, 1996, 1984, 1972, 1960
Ox: 2009, 1997, 1985, 1973, 1961
Tiger: 2010, 1998, 1986, 1974, 1962
Rabbit: 2011, 1999, 1987, 1975, 1963
Dragon: 2012, 2000, 1988, 1976, 1964
Snake: 2013, 2001, 1989, 1977, 1965
Horse: 2014, 2002, 1990, 1978, 1966
Goat: 2015, 2003, 1991, 1979, 1967
Monkey: 2016, 2004, 1992, 1980, 1968
Rooster: 2017, 2005, 1993, 1981, 1969
Dog: 2018, 2006, 1994, 1982, 1970
Pig: 2019, 2007, 1995, 1983, 1971
 */
var godina_rodjenja = 1987;
var zmija = "zmija";
var konj = "konj";
var koza = "koza";
var majmun = "majmun";
var petao = "petao";
var pas = "pas";
var svinja = "svinja";
var pacov = "pacov";
var bivo = "bivo";
var tigar = "tigar";
var zec = "zec";
var zmaj = "zmaj";

if (typeof godina_rodjenja === "number" && godina_rodjenja < 2001 && godina_rodjenja > 1988) {
    if (godina_rodjenja > 1988 && godina_rodjenja < 1990) {
        console.log("Vas horoskopski znak je " + zmija + ".");
    }
    else
        if (godina_rodjenja > 1989 && godina_rodjenja < 1991) {
            console.log("Vas horoskopski znak je " + konj + ".");
        }
        else
            if (godina_rodjenja > 1990 && godina_rodjenja < 1992) {
                console.log("Vas horoskopski znak je " + koza + ".")
            }
            else
                if (godina_rodjenja > 1991 && godina_rodjenja < 1993) {
                    console.log("Vas horoskopski znak je " + majmun + ".")
                }
                else
                    if (godina_rodjenja > 1992 && godina_rodjenja < 1994) {
                        console.log("Vas horoskopski znak je " + petao + ".")
                    }
                    else
                        if (godina_rodjenja > 1993 && godina_rodjenja < 1995) {
                            console.log("Vas horoskopski znak je " + pas + ".")
                        }
                        else
                            if (godina_rodjenja > 1994 && godina_rodjenja < 1996) {
                                console.log("Vas horoskopski znak je " + svinja + ".")
                            }
                            else
                                if (godina_rodjenja > 1995 && godina_rodjenja < 1997) {
                                    console.log("Vas horoskopski znak je " + pacov + ".")
                                }
                                else
                                    if (godina_rodjenja > 1996 && godina_rodjenja < 1998) {
                                        console.log("Vas horoskopski znak je " + bivo + ".")
                                    }
                                    else
                                        if (godina_rodjenja > 1997 && godina_rodjenja < 1999) {
                                            console.log("Vas horoskopski znak je " + tigar + ".")
                                        }
                                        else
                                            if (godina_rodjenja > 1998 && godina_rodjenja < 2000) {
                                                console.log("Vas horoskopski znak je " + zec + ".")
                                            }
                                            else
                                                if (godina_rodjenja > 1999 && godina_rodjenja < 2001) {
                                                    console.log("Vas horoskopski znak je " + zmaj + ".")
                                                }
} else {
    console.log("Unesite tacnu godinu rodjenja");
}