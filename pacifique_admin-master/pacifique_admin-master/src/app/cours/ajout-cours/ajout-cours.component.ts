import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ajout-cours',
  templateUrl: './ajout-cours.component.html',
  styleUrls: ['./ajout-cours.component.scss']
})
export class AjoutCoursComponent implements OnInit {
public cours : any[]=[
    //1
    {
      num:1,
      sous_chapitre:[
        {
          titre:"Les différentes catégories de permis de conduire",
          paragraphes:[
            {
              image:"",
              titre:"Le permis A1",
              contenu:"C'est une attestation qui nous autorise à conduire les engins à deux roues dont la masse cylindrique ne dépasse 75cntimètre cube ,pour avoir ce permis il faut avoir 16ans."
            },
            {
              image:"",
              titre:"Le permis A2",
              contenu:"C'est une attestation qui nous autorise à conduire les engins à deux roues dont la masse cylindrique est supérieur à 75cntimètre cube jusqu'à 400 centimètre cube ,pour avoir ce permis il faut avoir 18ans."
            },
            {
              image:"",
              titre:"Le permis A3",
              contenu:"C'est une attestation qui nous autorise à conduire les engins à deux roues dont la masse cylindrique est supérieur à  400 centimètre cube ,pour avoir ce permis il faut avoir 21ans."
            },
            {
              image:"",
              titre:"Le permis B",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affectés au transport de marchandises dont le poids total autorisé en charge(PTAC) ne dépasse pas 3,5tonnes .C'est aussi C'est une attestation qui nous autorise à conduire les véhicules affectés au transport en commun de personnes dont le nombre ne dépasse pas 09 y compris moi-même le conducteur (le chauffeur).Pour être détenteur de ce permis il faut avoir 18ans."
            },
            {
              image:"",
              titre:"Le permis C",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport de marchandises dont le poids total autorisé en charges dépasse 3,5 tonnes jusqu'à 18 tonnes. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans."
            },
            {
              image:"",
              titre:"Le permis C1",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport de marchandises dont le poids total autorisé en charges est supérieur à 18 tonnes. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans"
            },
            {
              image:"",
              titre:"Le permis Dr",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport en commun de personnes dont le nombre dépasse 09 jusqu'à 20. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans"
            },
            {
              image:"",
              titre:"Le permis D",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport en commun de personnes dont le nombre dépasse 20 jusqu'à 50. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans"
            }, 
            {
              image:"",
              titre:"Le permis E",
              contenu:"C'est une attestation qui nous autorise à conduire les tracteurs ,les véhicules agricole"
            }, 
            {
              image:"",
              titre:"Le permis F",
              contenu:"C'est une attestation qui nous autorise à conduire les tree-cycles pour les handicapés physique ."
            }
          ]
        }
      ],
      titre:"Les diverses catégories de permis",
      description:"A l'auto-école ,il existe plusieurs catégories de permis.Nous avons le permis A qui est divisé en trois groupes:      -Le permis A1       -Le permis A2   -Le permis A3",
      image:""
    },
    //2
    {
      num:2,
      sous_chapitre:[
        {
          titre:"definition",
          paragraphes:[
            {
              image:"",
              titre:"La route",
              contenu:"C'est un passage à revêtement spécial ouvert à la circulation publique.Elle est comprend la chaussée , l'accotement ou trottoir ."
            },
            {
              image:"",
              titre:"La chaussée",
              contenu:"Elle est une partie de la route réservée pour la circulation des véhicules. Elle est composée de voies"
            },
            {
              image:"",
              titre:"La voie",
              contenu:"Elle est une partie de la chaussée ayant une largeur suffisante pour permettre la circulation d'un fil de véhicules."
            },
            {
              image:"",
              titre:"La bande cyclable",
              contenu:"C'est une partie de la chaussée réservée à la circulation des cycles et cyclomoteurs(hors agglomération)."
            },
            {
              image:"",
              titre:"La piste cyclable",
              contenu:"C'est une partie de l'accotement réservée à la circulation des cycles et cyclomoteurs(hors aggglomération)."
            },
            {
              image:"",
              titre:"L'accotement",
              contenu:"C'est une partie de la route bordant latéralement la chaussée.La circulation des véhicules y est interdite mais ils peuvent y stationner."
            },
            {
              image:"",
              titre:"Terre-plein central ou glissière de sécurité",
              contenu:"C'est une partie de la route qui sépare deux chaussées consécutives ."
            },
            {
              image:"",
              titre:"Le trottoir",
              contenu:"C'est un accotement aménagé pour la circulation des piétons et habituellemnt séparé de chaussée par une bordure relevée.Les véhicules ne doivent pas y stationnés."
            }

          ]
        },
        {
          titre:"Les différentes sortes de routes",
          paragraphes:[
            {
              image:"",
              titre:"Les routes secondaires",
              contenu:"Elles se retrouvent dans l'agglomération dont la vitesse est limitée à 50km/h"
            },
            {
              image:"",
              titre:"Les routes à grande circulation",
              contenu:"On les rencontre en hors agglomération dont la vitesse est limitée à 90km/h sauf indications contraires ."
            }
          ]
        },
        {
          titre:"Les diverse formes de routes",
          paragraphes:[
            {
              image:"",
              titre:"Les formes de routes",
              contenu:"Il existe plusieurs formes de routes : les routes en forme de T ,les routes en forme de X(multiplication) ,les routes en forme de +(plus),les routes en forme de Y(i grec) etc ...\n Dans toutes ses formes de route,nous avons plein d'autre ."
            },
            {
              image:"",
              titre:"La route de montagne",
              contenu:"Ce sont des routes à grande déclivité"
            },
            {
              image:"",
              titre:"Les routes pour automobiles",
              contenu:"Ce sont des routes composées de deux chaussées à sns unique séparées par unterre-plein central ou glissières de sécurité.La vitesse est limitée à 110km/h ou en fonction de la législation en vigueur dans le chaque pays ."
            },
            {
              image:"",
              titre:"L'autoroute",
              contenu:"Elle est une route composée de deux chaussées à sens unique séparée par un terre-pleiin central dont chaque chaussée comporte au minimun trois voies sans intersection d'une autre route.On pénètre sur l'autoroute par un bretelle d'accès prolongée par une voie d'accélération.La vitesse maximale est de 130km/h et la vitesse minimale est de 80km/h ou en fonction de la législation en vigueur dans chaque pays.On en sort par une bretelle de sortie,précédée d'une voie de décélération."
            },
            {
              image:"",
              titre:"NB",
              contenu:"Chaque chaussée est bordée d'une bande d'arrêt d'urgence qu'on ne peut utiliser qu'en cas de panne ou d'accident.Seuls les véhicules prioritaires en mission peuvent y circuler la dessus (SAMU ; Sapeur-pompier ; Police ; Gendarme ; Service de dépannage)."
            },
            

          ]
        }
      ],
      titre:"Route",
      description:"Lorsqu'ils circulent, tous les usagers se déplacent sur ce que le code de la route appelle une route, et ceci quel que soit leur moyen de locomotion. Mais le mot “route” est un terme générique ne permettant pas de détailler à lui seul certains éléments importants, comme les divers parties composant la chaussée. Or, il est important pour l’ensemble des conducteurs de connaître les différents éléments qu'ils sont tous amenés à croiser lorsqu'ils circulent sur une route.",
      image:""
    },
    //3
    {
      num:3,
      sous_chapitre:[
        {
          titre:"La signalisation lumineuse",
          paragraphes:[
            {
              image:"",
              titre:"La signalisation lumineuse",
              contenu:"C'est un ensemble de feux tricolores qu'on rencontre au intersections sur la chaussée. La couleur de ses feux tricolores est : vert, jaune ,rouge .Le feux vert nous autorise à ciruler , le jaune nous autorise à ralentir , le rouge nous autorise à marquer l'arrêt.L'odre d'allumage de ces feux est ;(vert-jaune-rouge) ou (rouge-vert-jaune)."
            },

          ]
        },
        {
          titre:"La signalisation des agents",
          paragraphes:[
            {
              image:"",
              titre:"La signalisation des agents",
              contenu:"C'est l'ensemble des policiers, des gendarmes que nous rencontrons sur la chaussée. C'est -à-dire qu'elle prime sur les autres signalisations car ce sont eux qui réglementent ou régularisent la circulation ."
            },

          ]
        },
        {
          titre:"La signalisation verticale ",
          paragraphes:[
            {
              image:"",
              titre:"La signalisation verticale ",
              contenu:"c’est l’ensemble de tous les panneaux implantés verticalement’ le long des routes pour donner des indications précises aux usagers de la route. Ces signalisations sont au nombre de quatre groupes, mais parmi ces signalisations on peut retrouver les panneaux temporaires de position ; les passages à niveaux et les balises Ses quatre groupes de signalisations sont: Les panneaux de danger, Les panneaux de prescription absolue, Les panneaux d’indication ou de simple renseignement ; Les panneaux d’intersection ou panneaux à régime ou super panneaux."
            },
            {
              image:"",
              titre:"Les Panneaux de  danger ",
              contenu:"Ce sont des panneaux avancés de formes triangulaires bordés de rouge intérieur peint en blanc marqués par des dessins peints en noir. Ils sont placés avant le danger. Er agglomération, ils sont à 50m avant le danger; hors agglomération, ils sont à 150m avant le danger. Ils nous renseignent et nous préviennent des dangers, des difficultés à rencontre sur la route que nous empruntons. L’arrêt, le stationnement et le dépassement sont interdit devant tous les panneaux du danger. "
            },
            {
              image:"",
              titre:"Les panneaux de prescription absolue",
              contenu:"Ce sont des panneaux de formes rondes, toutes couleurs confondues. Ils sont nombre de quatre sous-groupes. Ils nous obligent à nous conformer rigoureusement différentes règles de la circulation.IL comprend : les panneaux d’interdiction qui sont de formes rondes bordées de rouge fond blanc ou bleu marqués par des dessins. Les fonds blancs sont les accès interdits, Les fonds bleus sont les stationnements interdits. Les panneaux de fin d’interdiction qui sont de formes rondes bordées de noir fond blanc marqués par des dessins peints noir et barrés de noir marquant la nature de fin d’interdiction. Les panneaux d’obligation qui sont de formes rondes bordées de bleu, fond bleu marqués par des dessins peints en blanc marquant la nature d’obligation. Les panneaux de fin d’obligation qui sont de formes rondes bordées de bleu, fond marqués par des dessins peints en blanc barrés de rouge marquant la nature de d’obligation."
            },
            {
              image:"",
              titre:"Les panneaux d’indication et de simple renseignement",
              contenu:"Ce sont des panneaux de formes carré, rectangle ou flèche. Il comprend :  Les panneaux d’indication indiquent le lieu où l’endroit où se situe, tel ville, tel village, tel   atelier ou tel chose.  Les panneaux de simple renseignement  marquent le lieu où la zone où telle chose se situe. "
            },
            {
              image:"",
              titre:"Les panneaux d’intersection",
              contenu:"Encore appelés super panneau ou à régime prioritaire, ont une forme triangulaire , losangique ou polygonale. On les retrouve généralement aux intersections. Ils nous aident à respecter les règles de la priorité. On y retrouve : Les balises ce sont des formes de signalisations verticales qui nous donnent des précisions sur la nature des routes que nous empruntons. Ils existent sept (07) formes de balises. La balise de virage : elle est sous forme de pilier de couleur blanche ayant son extrémitéSupérieure peinte en rouge.  — La balise de virage très dangereux: elle est sous forme de plaque rectangulaire fond bleu muni des flèches blanches orientées dans le sens de la courbe. — La balise d’intersection : elle est sous de forme de pilier blanc peint en rouge au 3 /4 de la longueur. La balise d’intersection sert à rendre plus visible l’intersection.— La balise de délinéateur: elle est sous forme de pilier couleur blanche au 3/4 avec une barre bleue et une plaquette réfléchissante servant à délimiter la chaussée. — La balise de tête d’ilots directionnels : elle est sous forme de plaque carré fond bleu l’intérieur de laquelle est inscrite une grande flèche blanche orientée, qui détermine le sen précis et de quel côté je dois contourner.  — La balise de vent latéral : elle est sous forme de ballon décoré de blanc rouge soutient par un poteau qui indique la direction et la force que prend le vent. — La balise de céder le passage : elle est sous forme d’un panneau triangulaire point er bas, bordée de rouge et soutenu par un pilier blanc. Elle a été remplacée par le panneau triangulaire point en bas.  Signalisation horizontale: C’est l’ensemble de toutes les marques peintes sur la chaussée On distingue:  — La ligne continue centrale : c’est une ligne blanche tracée au milieu de la chaussée servant de mur. Je ne dois pas la franchir, ni la chevaucher. Le dépassement est rigoureusement interdit à son niveau. Je ne dois pas également stationner à la hauteur d’une ligne continue centrale.  — La ligne discontinue centrale: c’est une ligne blanche tracée sur la chaussée dont le plein est 3m et le vide est 10m. Le dépassement est autorisé.  — Les lignes d’avertissement: ce sont les lignes discontinues blanches longues de 200 m accompagnées des flèches de rabattement. Elles annoncent la ligne continue centrale. Je ne dois pas effectuer un dépassement à leur niveau, si je ne suis pas sûr de terminer ma manœuvre avant la ligne continue centrale. Le plein est 3m et le vide est 1,33m. (Interdit le dépassement).  — Les lignes mixtes: ce sont les lignes discontinues centrales accolées à la ligne continue centrale. Je peux les franchir pour effectuer un dépassement s les lignes discontinues sont de mon côté. (Côté de la voiture, côté chauffeur).  — Les lignes de rives: les lignes de rives sont des lignes discontinues ou continues (blanche jaune ou rouge tracées aux abords de la chaussée ou contre le trottoir je peux les franchir pour stationner sur l’accotement. (en agglomération ou hors agglomération). Si ce sont les lignes discontinues (blanche, jaune ou rouge tracées aux abords de la chaussée ou contre trottoir, elles autorisent l’arrêt et interdisent le stationnement.  Et si ce sont les lignes continues, elles interdisent l’arrêt et le stationnement.  — Les Zébras : ce sont des hachures peintes en blanc sur la chaussée interdisant aux  véhicules de stationner, de circuler ou de marquer l’arrêt.  — Voie de stockage : elle est aménagée au milieu de la chaussée pour que les véhicules voulant tourner à gauche ne gênent pas ceux qui continuent tout droit.  — Flèches de rabattements : elles délimitent les voies de circulation. Ces flèches son habituellement au nombre de trois intercalées entre les tirets blancs et elles sont orientées vers la droite. Sur ces flèches, je ne suis pas autorisé à faire le dépassement Elles me demandent de serrer ma droite.  — Les lignes jaune zig-zig, appelées encore lignes brisées: elles sont tracées à des  endroits sur la chaussée qui matérialisent le lieu d’arrêt des autobus.  — Les Flèches de sélection : elles sont tracées sur chacune des voies sur la chaussée SL vante la direction à prendre. Elle me permet de vite choisir ma voie suivant la direction que je veux prendre.  — Les passages pour piéton : appelés encore passages cloutés sont de larges band blanches tracées à la limite des feux tricolores permettant aux piétons de traverser librement la chaussée. A ce niveau, je dois ralentir ou m’arrêter s’il le faut pour laisser les piétons engagés dans la traversée de la chaussée. C’est l’ensemble des comportements à tenir aux intersections"
            },

          ]
        },
      ],
      titre:"Les signalisations routières",
      description:"Le Code de la route est un ensemble de différentes signalisations permettant un circulation plus sûre et plus rapide.Il a pur but d'indiquer ou de rappeler aux usagers les différentes prescriptions routières.Il existe quatre(04) formes de signalisations routières :Lasignalisation lumineuse ,la signalisation des agent , la signalisation verticale , la signalisation horizontale",
      image:""
    },
     //4
     {
      num:4,
      sous_chapitre:[
        {
          titre:"La règle de priorité à droite",
          paragraphes:[
            {
              image:"",
              titre:"La règle de priorité à droite",
              contenu:"Elle consiste à céder le passage à tout usager venant de sa droite ou de passer premièrement si sa droite est libre. Dans ce groupe de priorités, il y a cinq cas ou on applique) cette règle de priorité"
            },
            {
              image:"",
              titre:"1er cas ",
              contenu:"A l’intersection de deux routes de même nature ; sans signalisation c’est - à- dire ni feu tricolore, ni agent de police, ni panneaux d’intersection, je dois appliquer la règle c priorité à droite."
            },
            {
              image:"",
              titre:"2e cas ",
              contenu:"A une intersection de deux routes de même nature ou l’on a le panneau secondaire et le panneau donne son nom à l’intersection et ce dernier devient l’intersection de deux routes secondaires (en agglomération). Je dois appliquer la règle de priorité à droite."
            },
            {
              image:"",
              titre:"3e cas",
              contenu:"A une intersection de deux routes de même nature ou l’on a le panneau secondaire dangereux. Le panneau donne son nom à l’intersection et L’intersection devient: l’intersection de deux routes dangereuses. (En agglomération). Je dois appliquer la règle de priorité à droite."
            },
            {
              image:"",
              titre:"4e cas",
              contenu:"A l’intersection de deux routes de même nature au l’on a le panneau à grande circulation dangereuse. Le panneau donne son nom à l’intersection et l’intersection devient l’intersection de deux routes classées à grande circulation dangereuse. (Hors agglomération)"
            },
            {
              image:"",
              titre:"5e cas",
              contenu:" A l’intersection de deux routes de même nature où il y a les quatre feux tricolores aux quatre coins, mais ils ne fonctionnent pas, il y a seulement les feux jaune qui clignote Je dois appliquer la priorité à droite."
            },
            {
              image:"",
              titre:"NB ",
              contenu:"La règle de courtoisie : si toutes les voies sont occupées à l’intersection, on applique la règle de courtoisie plus la priorité à droite. Celui qui est courtois patient donne l’ordre à celui qui est à sa gauche de passer. Ainsi celui qui donne l’ordre passera en dernière position."
            },
            {
              image:"",
              titre:"Le permis D",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport en commun de personnes dont le nombre dépasse 20 jusqu'à 50. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans"
            }, {
              image:"",
              titre:"Le permis E",
              contenu:"C'est une attestation qui nous autorise à conduire les tracteurs ,les véhicules agricole"
            }, {
              image:"",
              titre:"Le permis F",
              contenu:"C'est une attestation qui nous autorise à conduire les tree-cycles pour les handicapés physique ."
            },

          ]
        },
        {
          titre:"La règle de priorité de passage",
          paragraphes:[
            {
              image:"",
              titre:"La règle de priorité de passage",
              contenu:"Elle consiste à ne pas céder le passage à aucun usagé venant ni de sa droite ni de gauche. Dans ce groupe de priorités, il y a cinq cas"
            },
            {
              image:"",
              titre:"1er cas ",
              contenu:"A une intersection où il y a le panneau losange à fond jaune. (Voie prioritaire)."
            },
            {
              image:"",
              titre:"2e cas ",
              contenu:" A une intersection où il y a le panneau à flèche barrée. (Priorité de passage)."
            },
            {
              image:"",
              titre:"3e cas",
              contenu:" A une intersection où il y a le panneau passage protégé (panneau de deux routes secondaires dont l’une est protégée)."
            },
            {
              image:"",
              titre:"4e cas",
              contenu:"A une intersection où il y a l’agent de police vu de profile."
            },
            {
              image:"",
              titre:"5e cas",
              contenu:" A une intersection où il y a les feux tricolores et les feux fonctionnent mais de m côté il y a le feu vert allumé."
            },
          ]
        },
        {
          titre:"La Règle de priorité de céder le passage",
          paragraphes:[
            {
              image:"",
              titre:"La Règle de priorité de céder le passage",
              contenu:"Elle consiste à céder le passage À tous usagers venant de sa droite et de sa gauche. El s’applique en neuf cas"
            },
            {
              image:"",
              titre:"1er cas ",
              contenu:" A la vue d’un agent de police vu de dos ou de face. (Perte de priorité)"
            },
            {
              image:"",
              titre:"2e cas ",
              contenu:"A une intersection où les feux tricolores fonctionnent et de mon côté, le feu rouge est allumé. (Perte de priorité)."
            },
            {
              image:"",
              titre:"3e cas",
              contenu:"A la vue d’un panneau stop. (Perte de priorité) je dépasse un peu le panneau et marque l’arrêt."
            },
            {
              image:"",
              titre:"4e cas",
              contenu:"A la vue d’un panneau losange à fond jaune barré de noir (Perte de priorité)."
            },
            {
              image:"",
              titre:"5e cas",
              contenu:" A la vue d’un panneau triangulaire point en bas (Cédez le passage) je ralentis et cède le passage."
            },
            {
              image:"",
              titre:"6e cas",
              contenu:" A la vue d’un panneau triangulaire point en bas (Cédez le passage) je ralentis et cède le passage."
            },
            {
              image:"",
              titre:"7e cas",
              contenu:" A la vue d’un panneau triangulaire point en bas (Cédez le passage) je ralentis et cède le passage."
            },
            {
              image:"",
              titre:"8e cas",
              contenu:" A la vue d’un panneau triangulaire point en bas (Cédez le passage) je ralentis et cède le passage."
            },
            {
              image:"",
              titre:"9e cas",
              contenu:" A la vue d’un panneau triangulaire point en bas (Cédez le passage) je ralentis et cède le passage."
            },

          ]
        }

      ],
      titre:"La règle de priorité ",
      description:"A l’intersection nous voyons les feux tricolores qui représentent la signalisation lumineuse, les agents de polices qui représentent la signalisation des agents, les panneaux d’interdiction qui représentent la signalisation verticale. Comment se comporter â l’intersection?  Pour mieux circuler à l’intersection, il y a des règles que nous devons  Pratiquer; ces règles sont divisées en trois groupes:  — La règle de priorité à droite  — La règle de priorité de passage  — La règle de priorité de céder le passa",
      image:""
    },
    //5
    {
      num:5,
      sous_chapitre:[
        {
          titre:"Les feux à l’avant ",
          paragraphes:[
            {
              image:"",
              titre:"Les feux à l’avant ",
              contenu:"il existe quatre groupes de feux à l’avant d’un véhicule à savoir:"
            },
            {
              image:"",
              titre:" - Deux feux de route ",
              contenu:" appelés encore phare de couleur blanche ou jaune qui éclairent au moins à 100m visible à 150m. On l’utilise souvent la nuit hors agglomération ou en rase-campagne."
            },
            {
              image:"",
              titre:" - Deux feux de croisement ",
              contenu:" appelés encore code phare de couleur blanche ou jaune éclairante au moins à 30m et visible à 150m. On l’utilise souvent la nuit en agglomération; là où la visibilité n’est pas nette. On peut l’utiliser pour se croiser et aussi par temps de forte pluie."
            },
            {
              image:"",
              titre:" - Deux feux de position ",
              contenu:" appelés encore veilleuse de couleur blanche ou rouge qui est visible à 150m s’utilise souvent la nuit; lors d’un stationnement du véhicule pour mieux identifier la position du véhicule."
            },
            {
              image:"",
              titre:" - Deux feux d’indication de direction ",
              contenu:"appelés encore clignotant de couleur orange visible à 150m. On l’utilise avant le démarrage du véhicule et aussi avant de se rabattre de même avant d’effectuer le dépassement. "
            },

          ]
        },
        {
          titre:"",
          paragraphes:[
            {
              image:"",
              titre:" -Les feux à l'arrière du véhicule ",
              contenu:"A l’arrière d’un véhicule il existe cinq (05) feux à savoir:"
            },
             {
              image:"",
              titre:" -Deux feux de position ",
              contenu:" de couleur rouge qui sont visibles à 150m."
            },
            {
              image:"",
              titre:" -Deux dispositifs ",
              contenu:"appelés encore réfléchissant cataphote qui sont visibles à 100m de couleur rouge qui reflètent quand le phare d’un autre usager projette là-dessus."
            },
            {
              image:"",
              titre:" -Deux feux stop ",
              contenu:" de couleur rouge visibles à 150m qui s’allument quand on appui sur la pédale à frein afin d’attirer l’attention des autres usagers venant de derrière."
            },
            {
              image:"",
              titre:" -Deux feux d’indication de direction ",
              contenu:"appelés encore clignotant de couleur orange visible à 150m."
            },
            {
              image:"",
              titre:" -Feux de plaque d’immatriculation ",
              contenu:"C’est un feu qui sert à lire la plaque d’immatriculation la nuit lisible à 20m."
            },
            {
              image:"",
              titre:" - Feux de détresse ",
              contenu:"On parle de feux de détresse quand on met en fonction les   Clignotants avant comme arrière en marche .anti- brouillard : qu’on utilise souvent par temps de fort brouillard, pendant le harmattan, au crépuscule ou pendant la forte pluie."
            },
          ]
        },
         
      ],
      titre:"LES FEUX OBLIGATOIRES A L'AVANT ET A L'ARRIERE D'UN VEHICULE",
      description:" Il existe différentes sortes de feux sur un véhicule. Ses feux sont placés à l'avant comme à l'arrière d'un véhicule.",
      image:""
    },
    //6
    {
      num:6,
      sous_chapitre:[
        {
          titre:"LES CAS D’JNTERDICTON DE DEPASSER ",
          paragraphes:[
            {
              image:"",
              titre:"LES CAS D’JNTERDICTON DE DEPASSER ",
              contenu:"Le dépassement est interdit dans les cas suivants:Devant un panneau d’interdiction de dépasser , A la hauteur d’une ligne continue centrale , A l’approche d’un virage , A la hauteur des flèches de rabattement , A une intersection de routes , Sur un pont à double sens de circulation , A un sommet de côté (sur une monté) , Dans une descente rapide , Sur des passages à niveau. (Passage de train) , Sur les passages pour piéton , Sur chaussée rétrécie déformée ,Devant tous les panneaux de danger ,Partout où la visibilité est réduite ,Par temps de fort brouillard, de chute de neige ,Aux endroits où s’effectuent les travaux . "
            },
          ]
        },
        {
          titre:"PRECAUTION POUR UN BON DEPASSEMENT",
          paragraphes:[
            {
              image:"",
              titre:"PRECAUTION POUR UN BON DEPASSEMENT",
              contenu:"Ses précautions sont aux nombre de cinq (5)               S’assurer qu’aucune signalisation n’interdit le dépassement.               S’assurer qu’aucun usager ne vient d’en face.         S’assurer qu’on n’est pas sur le point d’être dépassé.               S’assurer qu’on a une vitesse suffisante.               S’assurer qu’on a de la place pour se rabattre après le dépassement. "
            },
            
          ]
        },
        {
          titre:"Comment s’effectue le dépassement?",
          paragraphes:[
            {
              image:"",
              titre:"Comment s’effectue le dépassement?",
              contenu:"Le dépassement s’effectue en trois temps : avant, pendant, et après. "
            },
            {
              image:"",
              titre:"Dépassement avant",
              contenu:"conforme aux (05) précautions "
            },
            {
              image:"",
              titre:"Dépassement pendant",
              contenu:" il faut mettre le clignotant gauche ; je klaxonne le jour et fais un appel lumineux la nuit. Si mon appel est compris de mon prédécesseur, il serre sa droite.  . Je me déporte vers la gauche, j’accélère et je Dépasse rapidement en laissant un écart de  véhicules et 1m pour les deux 02 roues, piéton ou animal. "
            },
            {
              image:"",
              titre:"Dépassement après",
              contenu:" je m’assure que le dépassement est terminé, en voyant nettement dans mon rétroviseur intérieur l’usager dépassé. Je mets mon clignotant droit et je rabats progressivement et complètement en serrant ma droite . "
            },
            {
              image:"",
              titre:"NB",
              contenu:" Le dépassement peut s’effectuer par le droit si mon prédécesseur manifeste son désir de tourner à gauche et me laisse suffisamment de la place à droite pour tourner. "
            },
            
          ]
        },                
      ],
      titre:"LES DEPASSEMENTS",
      description:" C’est une manœuvre dangereuse qui consiste à deux véhicules de passer l’un devant l’autre. Allant dans le même sens. Il s’effectue du côté gauche.",
      image:""
    },

    //7
    {
      num:7,
      sous_chapitre:[
        {
          titre:"Comment éffectué un croisement ?",
          paragraphes:[
            {
              image:"",
              titre:"Comment éffectué un croisement ? ",
              contenu:"Pour effectuer le croisement, je dois: ralentir, rétrograder mes vitesses, serrer ma droite, passer des feux de routes aux feux de croisement si c’est la nuit, s’arrêter s’il y a un obstacle qui m’oblige à me déporter vers la gauche."
            },
            {
              image:"",
              titre:" -  Croisement sur chaussées rétrécies",
              contenu:" Si la chaussée n’est pas assez large, ou en très mauvais état, les véhicules les plus encombrants doivent s’arrêter pour faciliter le passage des véhicules plus petits (légers). Je dois m’arrêter s’il s’agit d’un véhicule prioritaire en mission.  En agglomération, les plus petits véhicules doivent faciliter le passage des véhicules poids lourds (les transports en commun)"
            },
            {
              image:"",
              titre:" -Croisement sur une route de montagnes ",
              contenu:"Le véhicule descendant s’arrête le premier pour faciliter le passage du véhicule montant."
            },
           
            {
              image:"",
              titre:" -NB ",
              contenu:"Le véhicule à trois freins : frein principal, frein à mains, frein à moteur. Frein à moteur: lorsque j’enlève le pied sur I suffisamment alimenté en carburant pour continuer à la même vitesse. Les frottements et les compressions à l’intérieur du moteur retiennent le véhicule. Le frein à moteur est plus efficace, lorsque nous passion à la deuxième (02) vitesse (sur une pente)."
            },
          ]
        },  
      ],
      titre:" LE CROISEMENT",
      description:" C’est le passage de deux véhicules l’un à côté de l’autre allant en sens inverse. Le croisement s’effectue toujours par la droite. Jamais par la gauche. ",
      image:""
    },
    //8
    {
      num:8,
      sous_chapitre:[
        {
          titre:"Les documents obligatoire à bord d'un véhicule ",
          paragraphes:[
            {
              image:"",
              titre:"LES DOCUMENTS OBLIGATOIRES AUX BORDS D’UN VEHICULE",
              contenu:"Tout conducteur doit posséder les documents suivants afin de pouvoir se présenter à contrôle éventuel. Ces documents sont:"
            },
            {
              image:"",
              titre:" - La carte grise du véhicule ou certificat d’immatriculation ",
              contenu:"C’est l’acte de naissance du véhicule comportant les renseignements suivants:    Le nom, prénom et adresse complète du propriétaire, la marque du véhicule, charge du véhicule, le numéro du moteur, le numéro du châssis, la puissance du moteur, nature du lubrifiant utilisé."
            },
            {
              image:"",
              titre:" - L’attestation d’assurance ",
              contenu:"c’est un contrat établi entre le propriétaire du véhicule une société d’assurance. Son but est de protéger le véhicule en cas de risque d’accident, vol. d’incendie, suivant la nature de l’assurance octroyée au véhicule. "
            },
           
            {
              image:"",
              titre:" - La vignette de l’année en cours",
              contenu:"la vignette atteste le paiement de la taxe sur véhicules à moteur et doit être renouvelée chaque année. C’est une souscription qui verse dans le compte de l’Etat. L’Etat s’en sert pour confectionner les routes, contre les marchés."
            },
            {
              image:"",
              titre:" - La visite technique de la période",
              contenu:"Au cours d’une visite technique, les opérations de contrôle sont les suivantes : la conformité des numéros du moteur, du châssis de carrosserie ; l’inscription dans le livre de bord, vérification de tous les feux et les freins l’état des pneus (05) pneus ; l’état des par brises. L’état de la carrosserie, le ronflement moteur, la présence de l’extincteur, de la boîte à pharmacie et du triangle de pré signalisation"
            },
            {
              image:"",
              titre:" - Le réglage phare de l’année en cours",
              contenu:"C’est une opération qui consiste à régler la luminosité des ampoules et la distance normale d’éclairage."
            },
            {
              image:"",
              titre:" - Conclusion",
              contenu:"Les documents obligatoires d’un véhicule sont : l’assurance, la vignette, la vi technique, le réglage phare et la carte grise."
            },
            {
              image:"",
              titre:" - NB",
              contenu:"Le permis ne fait pas partir des documents obligatoires d’un véhicule. La remorque d’un véhicule doit avoir sa propre carte grise, si la PTAC est supérieure à 500 Kg."
            },
          ]
        },  
      ],
      titre:" LES DOCUMENTS OBLIGATOIRES   AUX BORDS D’UN VEHICULE",
      description:"A bord d'un véhicule certains documents sont important  ",
      image:""
    },
    // 9
    {
      num:9,
      sous_chapitre:[
        {
          titre:"L’arrêt ",
          paragraphes:[
            {
              image:"",
              titre:"L’arrêt",
              contenu:": C’est l’immobilisation de courte durée du véhicule. Le conducteur est au volant ou à proximité pour faire descendre ou faire monter les passagers et dégager le véhicule en cas de nécessité."
            },
            {
              image:"",
              titre:" - Les précautions à prendre pour effectuer un arrêt",
              contenu:" Ne pas être dans un cas d’interdiction , Je décélère , Je rétrograde mes vitesses , Je mets mon clignotant du côté de l’arrêt , J’immobilise mon véhicule"
            },
          ]
        },  
        {
          titre:"Le stationnement",
          paragraphes:[
            {
              image:"",
              titre:"Le stationnement ",
              contenu:": C’est l’immobilisation de longue durée de mon véhicule sur l’accotement : cette immobilisation ne doit pas excéder sept (07) jours. Plus de sept jours, il est considéré comme abusif et peut être pénalisé."
            },
            {
              image:"",
              titre:"Les précautions à prendre pour effectuer un bon stationnement ",
              contenu:" Ne pas être dans un cas d’interdiction de stationne  , Rétrograder les vitesses.  , Immobiliser le véhicule.  , Serrer le frein à main. , Allumer les feux de position si c’est la nuit.  , Descendre prudemment et faire descendre les usagers du côté trottoir.  , Placer le disque de stationnement en zone bleu.  , Monter les vitres.   , Mettre les antivols de sécurité.   , Faire sortir le livret de bord.   , Verrouiller les portières.  , S’éloigner de son véhicule mais ce stationnement ne doit excéder sept jours."
            },
            {
              image:"",
              titre:"Les types de stationnement ",
              contenu:"Il existe trois types de stationnement : Le stationnement en créneau , Le stationnement en bataille et  Le stationnement en épis ou en biais."
            },
            {
              image:"",
              titre:"Le stationnement en créneau ",
              contenu:"Les véhicules sont stationnés les uns derrières les autres parallèlement au trottoir."
            },
            {
              image:"",
              titre:"Le stationnement en bataille",
              contenu:"les véhicules sont stationnés les uns à côté des autres perpendiculairement à la chaussée."
            },
            {
              image:"",
              titre:" Le stationnement en épis ou en biais",
              contenu:"les véhicules sont stationnés de manière oblique ce qu’une seule roue ne touche le trottoir."
            },
            {
              image:"",
              titre:" Les cas d’interdiction de stationner",
              contenu:"il est interdit de stationner dans les cas suivant : Devant un panneau d’interdiction de stationner Contre les trottoirs ayant (e bord peint en jaune, rouge continu ou discontinu.A la hauteur d’une ligne continue.Dans un virage. Aux sommets de côté.Aux passages à niveaux (passage de train)Sur les passages pour piétons. Devant l’entrée d’une propriété à autrui. Devant les postes d’essence. Aux endroits où s’effectuent des travaux. Sur un pont. Dans les passages souterrains. Sur les tunnels ; en double file en pleine voie. Aux emplacements réservés à certaines catégories de véhicules partout où le stationnement générait les usagers et partout où la visibilité est réduite."
            },
          ]
        },  
      ],
      titre:" ARRÊT ET STATIONNEMENT",
      description:"A bord d'un véhicule certains documents sont important  ",
      image:""
    },
     // 10
     {
      num:10,
      sous_chapitre:[
        {
          titre:"La distance d’arrêt  ",
          paragraphes:[
            {
              image:"",
              titre:"La distance d’arrêt ",
              contenu:"c’est la distance totale parcourue pendant le temps de réaction Conducteur et de freinage du véhicule. Elle varie selon certaines circonstances à savoir:- L’état du conducteur (fatigue, alcoolisé etc.)- L’état de la chaussée (sèche ou humide)- L’efficacité des freins (freins mal faits) Elle se calcul en multipliant par lui-même le nombre de dizaine de vitesse parcourue. Exemple : Si je suis à 90 Km/h:DA : 90/1O = DA = 9 x 9 = 81 P40 Donc la distance d’arrêt DA = 81 m."
            },
          ]
        },  
        {
          titre:"La distance de freinage ou de sécurité",
          paragraphes:[
            {
              image:"",
              titre:"La distance de freinage ou de sécurité ",
              contenu:"c’est la distance pour immobiliser un véhicule, constituant l’intervalle de sécurité entre deux véhicules qui circulent. Elles varient aussi selon les circonstances données par la distance d’arrêt. Ainsi elle se calcule en multipliant par le coefficient 3 le nombre de dizaine de vitesse parcourue.  Exemple : Si je suis à 90 Km/h:   DF ou DS : 9O/1O = -(9x32r/  Donc la distance de freinage ou Ta distance de sécurité est égale à : DF= DS =27 m.  NB : La distance de sécurité est l’intervalle qu’un conducteur doit laisser entre son véhicule et celui qui le précède La distance de se4normale correspond a  L’espace parcouru pendant le temps de création  Sur un sol humide*   DFH ou DSH = DF x 1,5 DS x 1,5. "
            },
          ]
        },  
      ],
      titre:"CALCUL DE LA DISTANCE D’ARRÊT I ET DE LA DISTANCE DE FREINAGE",
      description:"A bord d'un véhicule certains documents sont important  ",
      image:""
    },
    // 11
    {
      num: 11,
      sous_chapitre:[
        {
          titre:"Accidents de la circulation ",
          paragraphes:[
            {
              image:"",
              titre:"Les origines ",
              contenu:"Les origines sont multiples et multiformes    Excès de vitesse   Etat d’ébriété   L’inobservation des différents règles les de priorité   Etat physique défaillante   Défaillance mécanique"
            },
           //il reste maintenant à mettre le secourisme .
          ]
        },  
        {
          titre:"Le secourisme",
          paragraphes:[
            {
              image:"",
              titre:"Comment protéger",
              contenu:" les premières mesures à prendre sur les lieux de l’accident sont celles qui permettent d’éviter l’aggravation de l’accident: Je gare convenablement mon véhicule pour ne pas constituer un risque d’accident supplémentaire.   Je balise les lieux de l’accident à l’aide de mes triangles de pré signalisation ou mes feux de détresse.  Je coupe le contact et si possible je débranche la batterie du véhicule accidenté, je ne fume pas, et je veille à ce que personne ne fume sur les lieux de l’accident. Je veille à ce que personne n’encombre le véhicule. Je protège leurs biens et je veille aux risques de vol. je tente d’ouvrir les portières pour faire sortir les blessés avec beaucoup de précautions. Je dépose les blessés à des endroits sûrs frais et paisibles. Je place les blessés en position latérale de sécurité, allongés sur leurs côtés le genou supérieur fléchi pour qu’ils ne roulent pas. Je tente d’éteindre un début d’incendie à l’aide de mon extincteur ; à défaut de l’extincteur, j’utilise du sable ou une couverture. Si c’est la nuit, j’utilise une lampe torche ou les phares d’un usager pour éclairer les véhicules accidentés, je place les phares perpendiculairement à la route. "
            },
            {
              image:"",
              titre:"Comment alerté  ",
              contenu:" je dois donner alerte le plus rapidement possible. J’avertis soit la police en ville, la gendarmerie en rase-campagne et dans les petites agglomérations par l’intermédiaire des téléphones publics ou privés. A défaut du téléphone, je donne l’alerte par l’intermédiaire des autres usagers allant dans tous les sens. Les renseignements que je communique sont les suivants : la nature de accident; le nombre de véhicules impliqués dans l’accident; les types de véhicules et leurs numéros respectifs; le lieu précis de l’accident; le nombre de victimes; le nombre de blessés graves; le nombre de morts etc. Maintenant les dispositions préliminaires déjà prises. "
            },
            {
              image:"",
              titre:"Comment secourir ",
              contenu:"en attendant l’arrivée des secours, deux sortes d’intervention peuvent sauver la vie d’un blessé: l’hémorragie et l’asphyxie."
            },
            {
              image:"",
              titre:"Comment combattre l’hémorragie ",
              contenu:"Si le blessé saigne abondamment: comprimer la plaie avec la main ou le poigné nu, ou à l’aide d’un gros pansement. Je place un garrot à courte durée et je précise l’heure à laquelle elle a été placée. Si la partie blessée n’est pas accessible au garrot, je cherche les points de compression de la victime afin d’arrêter le sang qui coule par saccade."
            },
            {
              image:"",
              titre:"Comment combattre l’asphyxie",
              contenu:"si le blessé ne respire plus ou respire mal, je desserre ses vêtements (col, ceinture, cravate, chemise etc.). Je dégage sa bouche des corps étrangers tels que le caillot de sang, le sable, l’herbe, divers objets. Je tire doucement sa tête en arrière. Je me place perpendiculairement au blessé en pratiquant la respiration de bouche à bouche; c’est-à-dire je pose ma bouche ouverte sur celle du blessé, je souffle fortement l’air de mes poumons dans ceux du blessé ; son thorax doit se soulever, j’enlève ma bouche."
            },
          ]
        },  
      ],
      titre:"LES ACCIDENTS   ET LES SECOURISMES",
      description:"Les facteurs de l’accident : les accidents sont dus à un mauvais comportement: c’est-à-dire à une faute de conduite, une erreur, une négligence ou une imprudence commise par un usager. L’accident est le résultat d’un ensemble de circonstances ; mais il existe toujours un fait plus important que les autres qui provoque immédiatement l’accident. ",
      image:""
    },
    // 12
    {
      num: 12,
      sous_chapitre:[
        {
          titre:" Alimentation en carburant ",
          paragraphes:[
            {
              image:"",
              titre:"Le réservoir  ",
              contenu:" il contient la réserve nécessaire de l’essence et il alimente la pompe à essence."
            },
            {
              image:"",
              titre:"La pompe à essence ",
              contenu:"aspire l’essence du réservoir et la retourne dans le  carburant."
            },
            {
              image:"",
              titre:"Le carburateur ",
              contenu:"alimenté par la pompe à essence permet de réaliser le mélange. L’air par aspiration, l’essence par pulvérisation"
            },
            {
              image:"",
              titre:"Le filtre à air ",
              contenu:"placé au-dessus du carburateur permet d’éliminer toutes les poussières."
            },
            {
              image:"",
              titre:"Le moteur",
              contenu:"le moteur tire sa force dans (03) éléments: l’essence; l’électricité et l’air. Le moteur a besoin de 12000 volts avant d’être accepté. Le démarreur a besoin du courant de 12 volts pour démarrer."
            },
           //il reste maintenant à mettre le secourisme .
          ]
        },  
        {
          titre:"LE CIRCUIT ELECTRIQUE	",
          paragraphes:[
            {
              image:"",
              titre:"Rôle de l’alternateur",
              contenu:" produire du courant électrique. "
            },
            {
              image:"",
              titre:"Rôle du régulateur  ",
              contenu:" réduit (diminue) l’intensité du courant électrique. "
            },
            {
              image:"",
              titre:"Rôle de la batterie",
              contenu:"accumule le courant électrique nécessaire au démarrage du moteur."
            },
            {
              image:"",
              titre:"Bobine ",
              contenu:"la bobine transforme le courant électrique"
            },
            {
              image:"",
              titre:"CONCLUSION: LE CIRCUIT ELECTRIQUE",
              contenu:"Pour faire fonctionner le moteur, il faut faire exploser le mélange gazeux dans les cylindres. C’est l’électricité qui est utilisée pour provoquer cette explosion. Le système d’allumage électrique est composé de plusieurs éléments. Le courant électrique est fourni par un organe appelé alternateur, il a pour rôle de fournir le courant électrique mais aussi de recharger la batterie au fur et à mesure que celle-ci libère le courant aux autres organes du véhicule. De l’alternateur, le courant passe par le régulateur dont le rôle est de régler ou de libérer à la batterie la quantité d’énergie exacte qu’il lui faut. Donc du régulateur le courant va s’emmagasiner dans la batterie. Autrement dit, la batterie est une source d’énergie qui accumule le courant électrique provenant de l’alternateur. De la batterie, le courant va à la clé contact, lorsque nous tournons celle-ci dans la première position, le courant électrique de basse tension (12V à 12000V). Le courant passe ensuite dans le delco ou allumeur dont le rôle est de distribuer le courant électrique de haute tension à chaque bougie dès que le démarreur lance le moteur."
            },
          ]
        },  
      ],
      titre:"ALIMENTATION DU MOTEUR",
      description:"Circuit de fonctionnement: pour mieux fonctionner, le moteur a besoin d’un mélange gazeux (air + essence) qui se fait dans le carburateur. Lorsque l’on verse l’essence dans le réservoir, l’essence est aspirée par une pompe à essence au démarrage du véhicule. L’essence passe par le tuyau à essence va dans le filtre à essence dont le rôle est de débarrasser l’essence de toutes ses impuretés. L’essence remonte dans le carburateur où s’effectue le mélange gazeux. La dépression du piston fait aspirer l’air du filtre à air placé au-dessus du carburateur. Cet air fait vaporiser l’essence qui arrive par un petit tube appelé Gi claire. Le mélange gazeux traversant le carburateur est réglé par un volet commandé par la pédale d’accélérateur. Plus on appui sur la pédale plus le volet s’ouvre, plus il passe le mélange et plus le moteur tourne vite. ",
      image:""
    },
    //13
    {
      num: 13,
      sous_chapitre:[
        {
          titre:"Les quatres temps du moteur",
          paragraphes:[
            {
              image:"",
              titre:"1er temps : temps de l’admission",
              contenu:"La soupape d’admission s’ouvre, le piston descend du point mort haut au point mort bas en aspirant le mélange gazeux venant du carburateur. Donc au temps de l’admission, le piston descend, la soupape d’admission s’ouvre et la soupape d’échappement reste fermée."
            },
            {
              image:"",
              titre:" 2ème temps : temps de compression",
              contenu:"La soupape d’admission et la soupape d’échappement sont fermées. Le piston remonte du point mort bas au point mort haut en comprimant le mélange gazeux. Donc au temps de compression; le piston monte; les deux soupapes sont fermées."
            },
            {
              image:"",
              titre:" 3ème temps : temps de l’explosion",
              contenu:"C’est le temps du moteur ou temps utile. La bougie produit une étincelle qui provoque l’explosion du mélange gazeux. Cette explosion repousse le piston vers le point mort bas. La soupape d’admission et la soupape d’échappement étant toujours fermées. Donc au temps de l’explosion le piston descend, les deux soupapes sont fermées."
            },
            {
              image:"",
              titre:" 4èm temps : temps de l’échappement",
              contenu:"La soupape d’échappement s’ouvre, la soupape d’admission étant toujours fermée, le piston remonte vers le point mort haut chassant les gaz brûlés (la fumée). Donc au temps de l’échappement, le piston monte, la soupape d’admission est fermée et la soupape d’échappement s’ouvre."
            },
           //il reste maintenant à mettre le secourisme .
          ]
        },  
      ],
      titre:"LES Quatres temps du moteur",
      description:"Pour le bon fonctionnement de notre moteur le piston doit effectuer quatre (04) temps au cours de chaque mouvement pour mieux faire passer le mélange gazeux venant du carburateur. Ses quatre temps sont:   Temps de l’admission  Temps de compression   Temps de l’explosion  Temps.de l’échappement.  Au niveau du piston, il existe deux ouvertures appelées la soupape. Une soupape d’admission, et la seconde d’échappement. Entre ses deux soupapes, se situe la bougie. ",
      image:""
    }
  ]
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }
  add(cour:any){
    console.log(cour)
    this.apiService.addCours(cour).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
