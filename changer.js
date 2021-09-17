// x6k#0362
// TODO: Add Legendware.
UI.AddLabel(":-:-:-:-:-: Clantag Changer :-:-:-:-:-:");
UI.AddLabel(":+:+: Created by x6k#0362 :+:+:");
UI.AddLabel(" ");
UI.AddDropdown("Clantags", ["Disabled", "Custom Sweep", "Gamesense", "Fatality", "Neverlose", "Nemesis", "Aimware", "Pandora", "LuckyCharms", "Rifk7", "Testing Tag" ]);
UI.AddTextbox("Custom Clantag")
UI.AddSliderInt("Tag Speed (1-20)", 1, 20);
var lasttime = 0;

function onRender()
{
    var tag = UI.GetValue("Script Items", "Clantags");
    var speed = UI.GetValue("Script Items", "Tag Speed (1-20)");
    var custom = UI.GetValue("Script Items", "Custom Clantag");
    var time = parseInt((Globals.Curtime() * speed))
    var gtime = parseInt((Globals.Curtime() * 2));
    if (time != lasttime)
    {
        if (tag == 0)
        {
            return
        }
        if (tag == 1)
        {
            switch ((time) % 25)
            {
                case 0:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(0));
                    break;
                }
                case 1:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(1));
                    break;
                }
                case 2:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(2));
                    break;
                }
                case 3:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(3));
                    break;
                }
                case 4:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(4));
                    break;
                }
                case 5:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(5));
                    break;
                }
                case 6:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(6));
                    break;
                }
                case 7:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(7));
                    break;
                }
                case 8:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(8));
                    break;
                }
                case 9:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(9));
                    break;
                }
                case 10:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(10));
                    break;
                }
                case 11:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(11));
                    break;
                }
                case 12:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(12));
                    break;
                }
                case 13:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(11));
                    break;
                }
                case 14:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(10));
                    break;
                }
                case 15:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(9));
                    break;
                }
                case 16:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(8));
                    break;
                }
                case 17:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(7));
                    break;
                }
                case 18:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(6));
                    break;
                }
                case 19:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(5));
                    break;
                }
                case 20:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(4));
                    break;
                }
                case 21:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(3));
                    break;
                }
                case 22:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(2));
                    break;
                }
                case 23:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(1));
                    break;
                }
                case 24:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(0));
                    break;
                }

            }
        }
        if (tag == 2)
        {
            switch ((gtime) % 20)
            {
                case 0:
                {
                    Local.SetClanTag("gamesense");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("amesense");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("mesense");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("esense");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("sense");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("ense");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("nse");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("se");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("e");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("g");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("ga");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("gam");
                    break;
                }
                case 14:
                {
                    Local.SetClanTag("game");
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("games");
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("gamese");
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("gamesen");
                    break;
                }
                case 18:
                {
                    Local.SetClanTag("gamesens");
                    break;
                }
                case 19:
                {
                    Local.SetClanTag("gamesense");
                    break;
                }
            }
        }
        if (tag == 3)
            switch ((time) % 31)
            {
                case 0:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("Fatality.wi");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("Fatality.w");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("Fatality.");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("Fatality");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("Fatalit");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("Fatali");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("Fatal");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("Fata");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("Fat");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("Fa");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("F");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 14:
                {
                    Local.SetClanTag("F");
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("Fa");
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("Fat");
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("Fata");
                    break;
                }
				case 18:
                {
                    Local.SetClanTag("Fatal");
                    break;
                }
				case 19:
                {
                    Local.SetClanTag("Fatali");
                    break;
                }
				case 20:
                {
                    Local.SetClanTag("Fatalit");
                    break;
                }
				case 21:
                {
                    Local.SetClanTag("Fatality");
                    break;
                }
				case 22:
                {
                    Local.SetClanTag("Fatality.");
                    break;
                }
				case 23:
                {
                    Local.SetClanTag("Fatality.w");
                    break;
                }
				case 24:
                {
                    Local.SetClanTag("Fatality.wi");
                    break;
                }
				case 25:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 26:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 27:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 28:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 29:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 30:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 31:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
            }
		if (tag == 4)
            switch ((time) % 55)
            {
                case 0:
                {
                    Local.SetClanTag(" ");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag(" |");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag(" ");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("N ");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("N ");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("N3 ");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("Ne ");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("Ne\ ");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("Ne\/ ");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("Nev ");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("Nev3 ");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("Neve ");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("Neve| ");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("Neve|2 ");
                    break;
                }
                case 14:
                {
                    Local.SetClanTag("Never| ");
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("Never|_ ");
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("Neverl ");
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("Neverl0 ");
                    break;
                }
				case 18:
                {
                    Local.SetClanTag("Neverlo ");
                    break;
                }
				case 19:
                {
                    Local.SetClanTag("Neverlo5 ");
                    break;
                }
				case 20:
                {
                    Local.SetClanTag("Neverlos ");
                    break;
                }
				case 21:
                {
                    Local.SetClanTag("Neverlos3 ");
                    break;
                }
				case 22:
                {
                    Local.SetClanTag("Neverlose ");
                    break;
                }
				case 23:
                {
                    Local.SetClanTag("Neverlose. ");
                    break;
                }
				case 24:
                {
                    Local.SetClanTag("Neverlose.< ");    
                }   break;
                case 25:
                {
                    Local.SetClanTag("Neverlose.c< ");
                }   break;
                case 26:
                {
                    Local.SetClanTag("Neverlose.cc ");   
                }   break;
                case 27:
                {
                    Local.SetClanTag("Neverlose.cc ");
                }   break;
                case 28:
                {
                    Local.SetClanTag("Neverlose.c< ");                               
                }   break;
                case 29:
                {
                    Local.SetClanTag("Neverlose.< ");                                    
                 }   break;
                case 30:
                {
                    Local.SetClanTag("Neverlose. ");                                       
                }   break;
                case 31:
                {
                    Local.SetClanTag("Neverlose ");                                       
                }   break;
                case 32:
                {
                    Local.SetClanTag("Neverlos3 ");                                        
                }   break;
                case 33:
                {
                    Local.SetClanTag("Neverlos ");                                       
                }   break;
                case 34:
                {
                    Local.SetClanTag("Neverlo_ ");                                        
                }   break;
                case 35:
                {
                    Local.SetClanTag("Neverlo5 ");                   
                }   break;
                case 36:
                {
                    Local.SetClanTag("Neverlo ");                      
                }   break;
                case 37:
                {
                    Local.SetClanTag("Neverl_ ");                       
                }   break;
                case 38:
                {
                    Local.SetClanTag("Never|0 ");                         
                }   break;
                case 39:
                {
                    Local.SetClanTag("Never| ");                     
                }   break;
                case 40:
                {
                    Local.SetClanTag("Neve|2 ");                    
                }   break;
                case 41:
                {
                    Local.SetClanTag("Neve| ");            
                }   break;
                case 42:
                {
                    Local.SetClanTag("Neve ");                  
                }   break;
                case 43:
                {
                    Local.SetClanTag("Nev3 ");                 
                }   break;
                case 44:
                {
                    Local.SetClanTag("Nev ");                 
                }   break;
                case 45:
                {
                    Local.SetClanTag("Ne\/ ");                
                }   break;
                case 46:
                {
                    Local.SetClanTag("Ne\ ");                   
                }   break;
                case 47:
                {
                    Local.SetClanTag("Ne ");                
                }   break;
                case 48:
                {
                    Local.SetClanTag("N3 ")                
                }   break;
                case 49:
                {
                    Local.SetClanTag("N ");                 
                }   break;
                case 50:
                {
                    Local.SetClanTag("|/|");                 
                }   break;
                case 51:
                {
                    Local.SetClanTag(" ");                  
                }   break;
                case 52:
                {
                    Local.SetClanTag(" |");                 
                }   break;
                case 53:
                {
                    Local.SetClanTag(" ");                 
                }   break;
                case 54:
                {
                    Local.SetClanTag(" ");                 
                }   break;
                case 55:
                {
                    Local.SetClanTag(" ");                  
                }   break;
            }
		    if (tag == 5)
            switch ((time) % 4)
            {
                case 0:
                {
                    Local.SetClanTag("nemesis ");                      
                }   break;
                case 1:
                {
                    Local.SetClanTag("n3m3sis ");                 
                }   break;
                case 2:
                {
                    Local.SetClanTag("nemesis ");                  
                }   break;
                case 3:
                {
                    Local.SetClanTag("n3m3sis ");                  
                }   break;
            }
            if (tag == 6)
            switch ((time) % 12)
            {
                case 0:
                {
                    Local.SetClanTag("AIMWARE.net   ");
                                        
                }   break;
                case 1:
                {
                    Local.SetClanTag("IMWARE.net  A ");
                                        
                }   break;
                case 2:
                {
                    Local.SetClanTag("MWARE.net  AI ");
                                        
                }   break;
                case 3:
                {
                    Local.SetClanTag("WARE.net  AIM ");
                                        
                }   break;
                case 4:
                {
                    Local.SetClanTag("ARE.net  AIMW ");
                                        
                }   break;
                case 5:
                {
                    Local.SetClanTag("RE.net AIMWA ");
                                        
                }   break;
                case 6:
                {
                    Local.SetClanTag("E.net  AIMWAR ");
                                        
                }   break;
                case 7:
                {
                    Local.SetClanTag(".net  AIMWARE ");
                                        
                }   break;
                case 8:
                {
                    Local.SetClanTag("net  AIMWARE. ");
                                        
                }   break;
                case 9:
                {
                    Local.SetClanTag("et  AIMWARE.n ");
                                        
                }   break;
                case 10:
                {
                    Local.SetClanTag("t AIMWARE.ne ");
                                        
                }   break;
                case 11:
                {
                    Local.SetClanTag("AIMWARE.net   ");
                                        
                }   break;
            }
            if (tag == 7)
            switch ((time) % 9)
            {
                case 0:
                {
                    Local.SetClanTag("_______");
                                        
                }   break;
                case 1:
                {
                    Local.SetClanTag("p_____a");
                                        
                }   break;
                case 2:
                {
                    Local.SetClanTag("pa___ra");
                                        
                }   break;
                case 3:
                {
                    Local.SetClanTag("pan_ora");
                                        
                }   break;
                case 4:
                {
                    Local.SetClanTag("pandora");
                                        
                }   break;
                case 5:
                {
                    Local.SetClanTag("_andor_");
                                        
                }   break;
                case 6:
                {
                    Local.SetClanTag("__ndo__");
                                        
                }   break;
                case 7:
                {
                    Local.SetClanTag("___d___");
                                        
                }   break;
                case 8:
                {
                    Local.SetClanTag("_______");
                                        
                }   break;
            }
            if (tag == 8)
            switch ((gtime) % 42)
            {
                case 0:
                {
                    Local.SetClanTag("Luck");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("Lucky");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("LuckyC");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("LuckyCh");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("LuckyCha");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("LuckyChar");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("LuckyCharm");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("LuckyCharms");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("LuckyCharms");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("LuckyCharms");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("LuckyCharms");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("uckyCharms");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("ckyCharms");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("kyCharms");
                    break;
                }
                case 14:
             {
                    Local.SetClanTag("yCharms");
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("Charms");
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("harms");
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("arms");
                    break;
                }
                case 18:
                {
                    Local.SetClanTag("rms");
                    break;
                }
                case 19:
                {
                    Local.SetClanTag("ms Lu");
                    break;
                }
                case 20:
                {
                    Local.SetClanTag("s Luc");
                    break;
                }
                case 21:
                {
                    Local.SetClanTag("Luck");
                    break;
                }
                case 22:
                {
                    Local.SetClanTag("Lucky");
                    break;
                }
                case 23:
                {
                    Local.SetClanTag("LuckyC");
                    break;
                }
                case 24:
                {
                    Local.SetClanTag("LuckyCh");
                    break;
                }
                case 25:
                {
                    Local.SetClanTag("LuckyCh4");
                    break;
                }
                case 26:
                {
                    Local.SetClanTag("LuckyCh4r");
                    break;
                }
                case 27:
                {
                    Local.SetClanTag("LuckyCh4rm");
                    break;
                }
                case 28:
                {
                    Local.SetClanTag("LuckyCh4rm$");
                    break;
                }
                case 29:
                {
                    Local.SetClanTag("LuckyCh4rm$");
                    break;
                }
                case 30:
                {
                    Local.SetClanTag("LuckyCh4rm$");
                    break;
                }
                case 31:
                {
                    Local.SetClanTag("LuckyCh4rm$");
                    break;
                }
                case 32:
                {
                    Local.SetClanTag("uckyCh4rm$");
                    break;
                }
                case 33:
                {
                    Local.SetClanTag("ckyCh4rm$");
                    break;
                }
                case 34:
                {
                    Local.SetClanTag("kyCh4rm$");
                    break;
                }
                case 35:
                {
                    Local.SetClanTag("yCh4rm$");
                    break;
                }
                case 36:
                {
                    Local.SetClanTag("Ch4rm$");
                    break;
                    }
                case 37:
                {
                    Local.SetClanTag("h4rm$");
                    break;
                }
                case 38:
                {
                    Local.SetClanTag("4rm$");
                    break;
                }
                case 39:
                {
                    Local.SetClanTag("rm$ L");
                    break;
                }
                case 40:
                {
                    Local.SetClanTag("m$ Lu");
                    break;
                }
                case 41:
                {
                    Local.SetClanTag("$ Luc");
                    break;
                }
            }
		    if (tag == 9)
            switch ((time) % 6)
            {
                case 0:
                {
                    Local.SetClanTag("( Яifk⁷ )");                      
                }   break;
                case 1:
                {
                    Local.SetClanTag("( Яifk⁷ )");                      
                }   break;
                case 2:
                {
                    Local.SetClanTag("( Яifk⁷ )");                      
                }   break;
                case 3:
                {
                    Local.SetClanTag("( Яifk⁷ )");                 
                }   break;
                case 4:
                {
                    Local.SetClanTag("( Я )");                  
                }   break;
                case 5:
                {
                    Local.SetClanTag("( Яif )");                  
                }   break;
            }
		    if (tag == 10)
            switch ((time) % 16)
            {
                case 0:
                {
                    Local.SetClanTag("Testing");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("esting");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("sting");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("ting");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("ing");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("ng");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("g");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("T");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("Te");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("Tes");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("Test");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("Testi");
                    break;
                }
				case 14:
                {
                    Local.SetClanTag("Testin");
                    break;
                }
				case 15:
                {
                    Local.SetClanTag("Testing");  
                }   break;
            }
        {
    }
    lasttime = time;
{
}
}
}


Cheat.RegisterCallback("Draw", "onRender");
