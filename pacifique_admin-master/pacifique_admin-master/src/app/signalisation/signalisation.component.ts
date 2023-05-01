import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signalisation',
  templateUrl: './signalisation.component.html',
  styleUrls: ['./signalisation.component.scss']
})
export class SignalisationComponent implements OnInit {
  sidebarVisible = true;
  isShow = false;
  role:String = ""
  delete(id:string){
    if(confirm("Voullez-vous supprimer cet élément ?"))
      this.apiService.deletePresence(id)
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  constructor(private authService: AuthService,
    private router: Router,private apiService:ApiService) { }
  public datas = [
    {
      type: 'Signaux de danger',
      num: 1,
      panneaux: [
        {
          image: 'a01',
          nom: 'Danger non précisé.',
          description: 'Ce panneau annonce un danger pour lequel il n\'existe pas de signal spécifique.',
          commentaire: 'La nature du danger peut être précisée par un panonceau.'
        },
        {
          image: 'a02',
          nom: 'Virage à droite.',
          description: '',
          commentaire: ''
        },
        {
          image: 'a03',
          nom: 'Virage à gauche.',
          description: '',
          commentaire: ''
        },
        {
          image: 'a04',
          nom: 'Succession de virages dont le premier est à droite.',
          description: 'Ce panneau annonce une série de 2 ou 3 virages dont le premier est à droite.',
          commentaire: ''
        },
        {
          image: 'a05',
          nom: 'Succession de virages dont le premier est à gauche.',
          description: 'Ce panneau annonce une série de 2 ou 3 virages dont le premier est à gauche.',
          commentaire: ''
        },
        {
          image: 'a06',
          nom: 'Chaussée rétrécie.',
          description: 'Ce panneau est implanté : \n- quand la chaussée est rétrécie des deux côtés ou\n- quand la disposition des lieux ne permet pas de distinguer de quel côté elle sera plus étroite.',
          commentaire: ''
        },
        {
          image: 'a07',
          nom: 'Chaussée rétrécie par la droite.',
          description: '',
          commentaire: ''
        },
        {
          image: 'a08',
          nom: 'Chaussée rétrécie par la gauche.',
          description: 'Lorsqu\'il est placé sur une chaussée à plus de deux voies, ce panneau annonce la suppression d\'une voie.',
          commentaire: ''
        },
        {
          image: 'a09',
          nom: 'Chaussée particulièrement glissante.',
          description: 'Souvent, un panonceau complète ce signal pour préciser ce qui rend la chaussée glissante.',
          commentaire: ''
        },
        {
          image: 'a10',
          nom: 'Cassis ou dos-d\'âne.',
          description: 'Un cassis est un creux ; un dos-d\'âne est une bosse.',
          commentaire: 'Pour annoncer un cassis ou dos-d\'âne présentant des difficultés de franchissement par des véhicules de faible garde au sol, ce panneau est complété par un panonceau sur lequel est mentionné \'véhicules surbaissés attention\'.'
        },
        {
          image: 'a11',
          nom: 'Ralentisseur de type dos-d\'âne.',
          description: 'Ce panneau est souvent complété par un autre limitant la vitesse à 30 km/h. Au-delà de cette vitesse, je risque d\'endommager mes amortisseurs.',
          commentaire: ''
        },
        {
          image: 'a12',
          nom: 'Descente dangereuse.',
          description: 'Ce panneau indique la valeur de la pente en pourcentage. Il est implanté quand la déclivité est supérieure à 10% sur route et à 4% sur autoroute.',
          commentaire: 'Dans une descente à 10%, je descends de 10 mètres lorsque je parcours 100 mètres.'
        },
        {
          image: 'a13',
          nom: 'Risque de chute de pierres ou de présence sur la route de pierres tombées.',
          description: 'A tout moment, je risque de trouver des pierres tombées sur la chaussée, mais le risque s\'accroît les journées de grand vent et de dégel.',
          commentaire: ''
        },
        {
          image: 'a14',
          nom: 'Débouché sur un quai ou une berge.',
          description: 'La nuit, je risque de confondre la surface de l\'eau avec la route.',
          commentaire: ''
        },
        {
          image: 'a15',
          nom: 'Pont mobile.',
          description: 'Avant que le pont se lève, la circulation est interrompue par la fermeture de barrières et parfois, par un feu rouge clignotant qui les complète.',
          commentaire: ''
        },
        {
          image: 'a16',
          nom: 'Annonce de feux tricolores.',
          description: 'Ce panneau est utilisé quand la présence de feux risque de me surprendre. C\'est notamment le cas hors agglomération.',
          commentaire: 'Il est souvent complété par un feu jaune clignotant et un panneau de limitation de vitesse.'
        },
        {
          image: 'a17',
          nom: 'Vent latéral.',
          description: 'Ce panneau annonce une zone particulièrement exposée au vent. Ce dernier peut aussi bien souffler vers la droite que vers la gauche.',
          commentaire: 'Plus loin, je rencontrerai vraisemblablement une manche à air donnant des indications sur la direction et la force du vent.'
        },
        {
          image: 'a18',
          nom: 'Manche à air.',
          description: 'Des manches à air sont placées à des endroits où souffle fréquemment un vent latéral violent qui risque de me surprendre. Elles montrent sa force et sa direction.',
          commentaire: 'Lorsque le vent est nul, la manche à air pend le long du mât. Elle se redresse dès qu\'il souffle, se trouve en position quasi horizontale lorsque ce vent est violent.'
        },
        {
          image: 'a19',
          nom: 'Circulation dans les deux sens.',
          description: 'Contrairement aux autres signaux de danger, ce panneau est placé à l\'endroit où la circulation devient à double sens.',
          commentaire: ''
        },
        {
          image: 'a20',
          nom: 'Endroit fréquenté par les enfants.',
          description: 'Ce panneau est placé non loin des écoles, mais également des terrains de jeux, des colonies de vacances...',
          commentaire: ''
        },
        {
          image: 'a21',
          nom: 'Passage pour piéton.',
          description: 'Le passage pour piétons sera matérialisé par des bandes blanches.',
          commentaire: 'Je dois ralentir pour céder le passage à tout piéton engagé.'
        },
        {
          image: 'a22',
          nom: 'Passage d\'animaux domestiques.',
          description: 'Ce panneau annonce un endroit où des animaux domestiques risquent de traverser la chaussée ou de l\'occuper.',
          commentaire: ''
        },
        {
          image: 'a23',
          nom: 'Passage d\'animaux domestiques.',
          description: 'Ce panneau annonce un endroit où des animaux domestiques risquent de traverser la chaussée ou de l\'occuper.',
          commentaire: 'Il a la même signification que le précédent bien que l\'animal représenté soit un mouton au lieu d\'une vache.'
        },
        {
          image: 'a24',
          nom: 'Passage d\'animaux sauvages.',
          description: 'Ce panneau annonce un endroit où des animaux sauvages risquent de traverser la chaussée.',
          commentaire: 'Je risque d\'en rencontrer à tout moment, mais ils se déplacent plus souvent la nuit.'
        },
        {
          image: 'a25',
          nom: 'Passage de cavaliers.',
          description: 'Ce panneau annonce un endroit où des cavaliers risquent de traverser la chaussée.',
          commentaire: ''
        },
        {
          image: 'a26',
          nom: 'Débouché de cyclistes venant de droite ou de gauche.',
          description: '',
          commentaire: ''
        },
        {
          image: 'a27',
          nom: 'Traversée d\'une aire de danger aérien.',
          description: 'La présence et le bruit des avions qui volent à basse altitude risquent de me surprendre.',
          commentaire: ''
        },
        {
          image: 'a28',
          nom: 'Traversée de voies de tramways.',
          description: 'La traversée de la voie peut être interrompue par un feu rouge clignotant.',
          commentaire: ''
        }
      ]
    }, {
      type: 'Passages à niveau',
      num: 2,
      panneaux: [
        {
          image: 'b01',
          nom: 'Passage à niveau muni de barrières à fonctionnement manuel lors du passage des trains.',
          description: 'Avant l\'arrivée d\'un train, les barrières seront fermées manuellement par un garde-barrières.',
          commentaire: ''
        },
        {
          image: 'b02',
          nom: 'Passage à niveau muni de demi-barrières à fonctionnement automatique lors du passage des trains.',
          description: 'Le fonctionnement du feu rouge clignotant et de la sonnerie annonce l\'arrivée d\'un train et précède de peu la fermeture des demi-barrières.',
          commentaire: 'Je dois toujours m\'arrêter au feu rouge clignotant.'
        },
        {
          image: 'b03',
          nom: 'Balises d\'annonce d\'un passage à niveau.',
          description: 'La première balise comportant 3 bandes rouges obliques est placée 150 mètres avant le passage à niveau. Elle complète le signal avancé de danger.',
          commentaire: 'Plus loin, une autre balise comportant 2 bandes rouges obliques est placée 100 mètres avant le passage à niveau.\nLa dernière balise qui comprend une seule bande rouge oblique est placée 50 mètres avant le passage à niveau.'
        },
        {
          image: 'b04',
          nom: 'Les demi-barrières à fonctionnement automatique sont fermées. Le feu rouge clignotant et la sonnerie fonctionnent.',
          description: 'Le panonceau \'un train peut en cacher un autre\' signifie que ce passage à niveau comporte plusieurs voies ferrées.',
          commentaire: ''
        },
        {
          image: 'b05',
          nom: 'La voie ferrée que je vais traverser sera électrifiée.',
          description: '',
          commentaire: ''
        },
        {
          image: 'b06',
          nom: 'Portique.',
          description: 'Ce portique sert à signaler les passages à niveau avec ligne électrifiée lorsque la hauteur des fils électriques est inférieure à 6 mètres.',
          commentaire: ''
        },
        {
          image: 'b07',
          nom: 'Passage à niveau sans barrières ni demi-barrières.',
          description: 'Signal avancé.',
          commentaire: ''
        },
        {
          image: 'b08',
          nom: 'Signalisation de position d\'un passage à niveau à une seule voie sans barrières ni demi-barrières.',
          description: 'Ce panneau est implanté à l\'endroit où la voie ferrée traverse la route.',
          commentaire: 'Je m\'engage à allure très réduite et, après m\'être bien assuré qu\'aucun train n\'arrive.'
        },
        {
          image: 'b09',
          nom: 'Signalisation de position d\'un passage à niveau à plusieurs voies sans barrières ni demi-barrières.',
          description: 'Comme il y a plusieurs voies, un train peut en cacher un autre.',
          commentaire: ''
        },
        {
          image: 'b10',
          nom: 'Signalisation de position d\'un passage à niveau à une voie, muni d\'une signalisation automatique lumineuse et sonore, sans barrières ni demi-barrières.',
          description: 'Lorsque le feu rouge clignotant s\'allume et que la sonnerie retentit, un train est annoncé. Je dois m\'arrêter.',
          commentaire: ''
        }
      ]
    }, {
      type: 'Signaux d\'intersections et de priorite',
      num: 3,
      panneaux: [
        {
          image: 'c01',
          nom: 'Intersection où je suis tenu de céder le passage aux véhicules de droite.',
          description: 'S\'agissant d\'un signal de danger, il est implanté :\n- 0 à 50 mètres avant l\'intersection en agglomération,\n- 150 mètres environ avant l\'intersection en rase campagne.',
          commentaire: ''
        },
        {
          image: 'c02',
          nom: 'Intersection avec une route dont les usagers doivent me céder le passage.',
          description: 'Ce panneau annonce une priorité ponctuelle de passage. J\'aurai la priorité uniquement à l\'intersection annoncée.',
          commentaire: ''
        },
        {
          image: 'c03',
          nom: 'Indication du caractère prioritaire d\'une route.',
          description: 'J\'aurai priorité à toutes les intersections.',
          commentaire: 'En rase campagne, il est placé après chaque carrefour important.\nEn agglomération, lorsque ce panneau est placé au-dessus du panneau d\'entrée, la route conserve son caractère prioritaire au-delà du panneau.'
        },
        {
          image: 'c04',
          nom: 'Panonceau schéma.',
          description: 'Il représente un croquis du carrefour que je vais aborder. Le trait large schématise l\'itinéraire prioritaire, les traits minces les branches non prioritaires. Le trait vertical du bas représente la route sur laquelle je circule.',
          commentaire: 'Ici, je circule donc sur l\'itinéraire prioritaire.'
        },
        {
          image: 'c05',
          nom: 'Fin du caractère prioritaire d\'une route.',
          description: 'A compter de la prochaine intersection, une signalisation indiquera les règles de priorité à appliquer.',
          commentaire: ''
        },
        {
          image: 'c06',
          nom: 'Annonce d\'un \'cédez le passage\'.',
          description: 'A 150 mètres, j\'aborderai une intersection sur laquelle je devrai céder le passage aux usagers qui circulent sur la chaussée abordée.',
          commentaire: ''
        },
        {
          image: 'c07',
          nom: 'Cédez le passage à l\'intersection. Signal de position.',
          description: 'J\'aborde une intersection sur laquelle je dois céder le passage à tous les usagers qui circulent sur la chaussée abordée, qu\'ils viennent de gauche ou de droite.',
          commentaire: 'Toutefois, je ne suis pas obligé de marquer un temps d\'arrêt.'
        },
        {
          image: 'c08',
          nom: 'Annonce d\'un stop.',
          description: 'A 150 mètres, je devrai obligatoirement marquer un temps d\'arrêt et céder le passage aux usagers qui circulent sur la chaussée abordée.',
          commentaire: ''
        },
        {
          image: 'c09',
          nom: 'Stop. Signal de position.',
          description: 'Je dois marquer un temps d\'arrêt et céder le passage à tous les usagers qui circulent sur la chaussée abordée, qu\'ils viennent de gauche ou de droite.',
          commentaire: ''
        },
        {
          image: 'c10',
          nom: 'Carrefour à sens giratoire.',
          description: 'Un carrefour à sens giratoire est un rond-point sur lequel les usagers qui entrent dans l\'anneau doivent céder le passage à ceux qui y circulent.',
          commentaire: 'Je devrai contourner le terre-plein par la droite.'
        },
        {
          image: 'm12a',
          nom: 'Autorise un cycliste à franchir le feu pour s\'engager à droite.',
          description: '',
          commentaire: ''
        },
        {
          image: 'm12b',
          nom: 'Autorise un cycliste à franchir le feu pour aller tout droit.',
          description: '',
          commentaire: ''
        }
      ]
    }, {
      type: 'Signaux d\'interdixtion de fin d\'interdiction et de zone\'',
      num: 4,
      panneaux: [
        {
          image: 'd01',
          nom: 'Circulation interdite à tout véhicule dans les deux sens.',
          description: 'Tous les véhicules, y compris les cyclistes sont concernés par cette interdiction.',
          commentaire: ''
        },
        {
          image: 'd02',
          nom: 'Sens interdit à tout véhicule.',
          description: 'Je ne dois pas m\'engager dans cette rue. Des véhicules peuvent y circuler en sens inverse.',
          commentaire: ''
        },
        {
          image: 'd03',
          nom: 'Interdiction de tourner à gauche à la prochaine intersection.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd04',
          nom: 'Interdiction de tourner à droite à la prochaine intersection.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd05',
          nom: 'Interdiction de faire demi-tour sur la route suivie jusqu\'à la prochaine intersection incluse.',
          description: 'Ce panneau n\'interdit pas de tourner à gauche.',
          commentaire: ''
        },
        {
          image: 'd06',
          nom: 'Interdiction de dépasser tous les véhicules à moteur autres que ceux à deux roues sans side-car.',
          description: 'Je peux dépasser un véhicule à deux roues ou un véhicule à traction animale.',
          commentaire: ''
        },
        {
          image: 'd07',
          nom: 'Fin d\'interdiction de dépasser les véhicules à moteur autres que ceux à deux roues sans side-car.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd08',
          nom: 'Interdiction aux poids lourds de dépasser tous les véhicules à moteur autres que ceux à deux roues sans side-car.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd09',
          nom: 'Fin d\'interdiction aux poids lourds de dépasser les véhicules à moteur autres que ceux à deux roues sans side-car.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd10',
          nom: 'Arrêt au poste de douane.',
          description: 'En principe, contrairement aux autres panneaux d\'interdiction, les 4 panneaux d\'arrêt à un poste (de douane, de gendarmerie, de police ou de péage) sont placés en signalisation avancée.',
          commentaire: ''
        },
        {
          image: 'd11',
          nom: 'Arrêt au poste de gendarmerie.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd12',
          nom: 'Arrêt au poste de police.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd13',
          nom: 'Arrêt au poste de péage.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd14',
          nom: 'Accès interdit aux véhicules à moteur à l\'exception des cyclomoteurs.',
          description: 'Les cyclistes, cyclomotoristes et véhicules à traction animale peuvent s\'engager.',
          commentaire: ''
        },
        {
          image: 'd15',
          nom: 'Accès interdit à tous les véhicules à moteur.',
          description: 'Les cyclistes et les véhicules à traction animale peuvent s\'engager.',
          commentaire: ''
        },
        {
          image: 'd16',
          nom: 'Accès interdit aux véhicules de transport de marchandises.',
          description: 'Ce panneau interdit l\'accès aux poids lourds, mais aussi aux véhicules légers affectés au transport de marchandises. Les camionnettes sont concernées par cette interdiction.',
          commentaire: ''
        },
        {
          image: 'd17',
          nom: 'Accès interdit aux piétons.',
          description: 'Tous les usagers assimilés aux piétons (ex : personnes qui poussent une voiture d\'enfant, qui tiennent à la main un vélo) sont également concernés par cette interdiction.',
          commentaire: ''
        },
        {
          image: 'd18',
          nom: 'Accès interdit aux cyclistes.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd19',
          nom: 'Accès interdit aux véhicules à traction animale.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd20',
          nom: 'Accès interdit aux véhicules agricoles à moteur.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd21',
          nom: 'Accès interdit aux voitures à bras.',
          description: 'Cette interdiction ne concerne pas les personnes qui conduisent une voiture d\'enfant, de malade ou d\'infirme, ou tout autre véhicule de petite dimension sans moteur.',
          commentaire: ''
        },
        {
          image: 'd22',
          nom: 'Accès interdit aux véhicules de transport en commun de personnes.',
          description: 'Ce panneau est placé à une centaine de mètres du début de la zone interdite.',
          commentaire: ''
        },
        {
          image: 'd23',
          nom: 'Accès interdit aux cyclomoteurs.',
          description: 'Les conducteurs de motocyclettes peuvent s\'engager.',
          commentaire: ''
        },
        {
          image: 'd24',
          nom: 'Accès interdit aux motocyclettes et motocyclettes légères.',
          description: 'Une motocyclette légère est une moto dont la cylindrée n\'excède pas 125 cm3 et dont la puissance n\'excède pas 11 kilowatts.',
          commentaire: 'Les conducteurs de cyclomoteurs peuvent s\'engager.'
        },
        {
          image: 'd25',
          nom: 'Accès interdit aux véhicules tractant une caravane ou une remorque de plus de 250 kg.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd26',
          nom: 'Accès interdit aux véhicules dont la longueur est supérieure à 10 mètres.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd27',
          nom: 'Accès interdit aux véhicules dont la largeur, chargement compris, est supérieure à 3,5 mètres.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd28',
          nom: 'Accès interdit aux véhicules dont la hauteur, chargement compris, est supérieure à 3,5 mètres.',
          description: 'Ce panneau est implanté lorsque la hauteur libre sous l\'ouvrage (tunnel, pont, fils électriques...) au-dessus d\'un point quelconque de la chaussée est inférieure à 4,30 mètres.',
          commentaire: ''
        },
        {
          image: 'd29',
          nom: 'Accès interdit aux véhicules dont le poids total autorisé en charge ou le poids total roulant autorisé excède 5,5 tonnes.',
          description: 'Ce panneau signale une limitation de tonnage.',
          commentaire: ''
        },
        {
          image: 'd30',
          nom: 'Accès interdit aux véhicules pesant plus de 3 tonnes sur un essieu.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd31',
          nom: 'Limitation de vitesse.',
          description: 'Ce panneau interdit de rouler à plus de 50 km/h.',
          commentaire: 'Je peux rouler à moins de 50 km/h, à 50 km/h, mais pas au delà.'
        },
        {
          image: 'd32',
          nom: 'Fin de limitation de vitesse.',
          description: 'Je peux à nouveau rouler à plus de 60 km/h.',
          commentaire: ''
        },
        {
          image: 'd33',
          nom: 'Entrée d\'une zone à vitesse limitée à 30 km/h.',
          description: 'Ce panneau est placé à chacune des entrées de la zone.',
          commentaire: ''
        },
        {
          image: 'd34',
          nom: 'Sortie d\'une zone à vitesse limitée à 30 km/h.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd35',
          nom: 'Cédez le passage à la circulation venant en sens inverse.',
          description: 'Ce panneau est implanté dans les passages étroits où le croisement est difficile, voir impossible.',
          commentaire: ''
        },
        {
          image: 'd36',
          nom: 'Signaux sonores interdits.',
          description: 'Ce panneau signale qu\'il est interdit de klaxonner en dehors des cas de danger immédiat.',
          commentaire: ''
        },
        {
          image: 'd37',
          nom: 'Fin d\'interdiction de l\'usage de l\'avertisseur sonore.',
          description: '',
          commentaire: ''
        },
        {
          image: 'd38',
          nom: 'Interdiction aux véhicules de circuler sans maintenir entre eux un intervalle au moins égal à 70 mètres.',
          description: 'Je devrai respecter cet intervalle de sécurité quelle que soit la vitesse à laquelle je circule.',
          commentaire: ''
        },
        {
          image: 'd39',
          nom: 'Accès interdit aux véhicules transportant des marchandises explosives ou facilement inflammables.',
          description: 'Sont soumis à cette interdiction d\'accès les véhicules transportant des matières dont la nature et la quantité sont définies par une règle relative au transport des marchandises dangereuses par route.',
          commentaire: ''
        },
        {
          image: 'd40',
          nom: 'Accès interdit aux véhicules transportant des marchandises susceptibles de polluer les eaux.',
          description: 'Sont soumis à cette interdiction d\'accès les véhicules transportant des matières dont la nature et la quantité sont définies par une règle relative au transport des marchandises dangereuses par route.',
          commentaire: ''
        },
        {
          image: 'd41',
          nom: 'Accès interdit aux véhicules transportant des marchandises dangereuses.',
          description: 'Sont soumis à cette interdiction les véhicules transportant des matières dangereuses signalées par une plaque orange.',
          commentaire: ''
        },
        {
          image: 'd42',
          nom: 'Autres interdictions dont la nature est indiquée par une inscription sur le panneau.',
          description: 'Ce signal interdit l\'accès aux troupeaux. Tous les autres usagers peuvent s\'engager.',
          commentaire: ''
        },
        {
          image: 'd43',
          nom: 'Fin d\'interdiction dont la nature est indiquée sur le panneau.',
          description: 'C\'est le seul panneau de fin d\'interdiction qui ne comporte pas de barre transversale noire. Il comporte toujours l\'inscription \'fin de\'.',
          commentaire: 'A partir de ce signal, l\'accès n\'est plus interdit aux skieurs.'
        },
        {
          image: 'd44',
          nom: 'Fin de toutes les interdictions précédemment signalées, imposées aux véhicules en mouvement.',
          description: 'Ce panneau met fin à toutes les interdictions sauf celles qui concernent l\'arrêt et le stationnement.',
          commentaire: ''
        }
      ],
    }, {
      type: 'Arret stationnement',
      num: 5,
      panneaux: [
        {
          image: 'e01',
          nom: 'Stationnement interdit.',
          description: 'Ce panneau interdit le stationnement mais autorise l\'arrêt sur la chaussée et l\'accotement du côté où il est implanté. Cette interdiction est valable à partir du signal, jusqu\'à la prochaine intersection.',
          commentaire: 'Une bande jaune discontinue sur la bordure du trottoir a la même signification.'
        },
        {
          image: 'e02',
          nom: 'Arrêt et stationnement interdits.',
          description: 'Ce panneau interdit l\'arrêt et le stationnement sur la chaussée et l\'accotement du côté où il est implanté. Cette interdiction est valable à partir du signal, jusqu\'à la prochaine intersection.',
          commentaire: 'Une bande jaune continue sur la bordure du trottoir a la même signification.'
        },
        {
          image: 'e03',
          nom: 'Stationnement interdit du 1er au 15 du mois.',
          description: 'Ce panneau, placé dans les zones à stationnement alterné, rappelle de quel côté le stationnement s\'effectue.',
          commentaire: 'Je peux stationner entre le 16 et le dernier jour du mois.\nLe changement de côté doit s\'effectuer le 15 et le dernier jour du mois, entre 20h30 et 21h.'
        },
        {
          image: 'e04',
          nom: 'Stationnement interdit du 16 au dernier jour du mois.',
          description: 'Ce panneau, placé dans les zones à stationnement alterné rappelle de quel côté le stationnement s\'effectue.',
          commentaire: 'Je peux stationner entre le 1er et le 15 du mois. Le changement de côté doit s\'effectuer le 15 et le dernier jour du mois, entre 20h30 et 21h.'
        },
        {
          image: 'e05',
          nom: 'Entrée d\'une zone à stationnement interdit.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e06',
          nom: 'Sortie de zone à stationnement interdit.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e07',
          nom: 'Entrée d\'une zone à stationnement unilatéral à alternance semi-mensuelle.',
          description: 'Du 1er au 15, je stationne du côté des immeubles portant les numéros impairs et du 16 au dernier jour du mois, du côté des immeubles portant les numéros pairs.',
          commentaire: 'Le changement de côté s\'effectue le 15 et le dernier jour du mois, entre 20h30 et 21h.'
        },
        {
          image: 'e08',
          nom: 'Sortie de zone à stationnement unilatéral à alternance semi-mensuelle.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e09',
          nom: 'Entrée d\'une zone à stationnement de durée limitée à 1h30 avec contrôle par disque (zone bleue).',
          description: 'Le stationnement est gratuit, mais à durée limitée. Je dois apposer un disque derrière le pare-brise pour indiquer l\'heure d\'arrivée.',
          commentaire: 'Un marquage au sol bleu confirme cette réglementation.'
        },
        {
          image: 'e10',
          nom: 'Sortie de zone à stationnement de durée limitée  à 1h30 avec contrôle par disque.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e10_2',
          nom: 'Entrée d\'une zone à stationnement de durée limitée avec contrôle par disque (zone bleue).',
          description: 'Le stationnement est gratuit, mais à durée limitée. Je dois apposer un disque derrière le pare-brise pour indiquer l\'heure d\'arrivée.',
          commentaire: 'Un marquage au sol bleu confirme cette réglementation.\nCe nouveau panneau remplacera progressivement le signal actuel.\nLa durée maximum de stationnement sera indiquée sur un panonceau.'
        },
        {
          image: 'e10_3',
          nom: 'Sortie de zone à stationnement de durée limitée  avec contrôle par disque.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e11',
          nom: 'Entrée d\'une zone à stationnement payant.',
          description: 'La mention \'payant\' est souvent inscrite sur la chaussée et la présence d\'horodateurs suffit, en général, pour notifier que le stationnement est payant.',
          commentaire: ''
        },
        {
          image: 'e12',
          nom: 'Sortie de zone à stationnement payant.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e13',
          nom: 'Entrée d\'une zone à stationnement unilatéral à alternance semi-mensuelle et à durée limitée à 1h30, avec contrôle par disque.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e14',
          nom: 'Sortie de zone à stationnement unilatéral à alternance semi-mensuelle et à durée limitée à 1h30 avec contrôle par disque.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e14_2',
          nom: 'Entrée d\'une zone à stationnement unilatéral à alternance semi-mensuelle et à durée limitée,  avec contrôle par disque.',
          description: '',
          commentaire: ''
        },
        {
          image: 'e14_3',
          nom: 'Sortie de zone à stationnement unilatéral à alternance semi-mensuelle et à durée limitée, avec contrôle par disque.',
          description: '',
          commentaire: ''
        }
      ]
    }, {
      type: 'Signaux d\'obligation et de fin d\'obligation',
      num: 6,
      panneaux: [
        {
          image: 'f01',
          nom: 'Obligation de tourner à droite avant le panneau.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f02',
          nom: 'Obligation de tourner à gauche avant le panneau.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f03',
          nom: 'Contournement obligatoire par la droite.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f04',
          nom: 'Contournement obligatoire par la gauche.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f05',
          nom: 'Direction obligatoire à la prochaine intersection : tout droit.',
          description: 'Ce panneau interdit par la même occasion de tourner à gauche ou à droite.',
          commentaire: ''
        },
        {
          image: 'f06',
          nom: 'Direction obligatoire à la prochaine intersection : à droite.',
          description: 'Ce panneau interdit par la même occasion de tourner à gauche et d\'aller tout droit.',
          commentaire: ''
        },
        {
          image: 'f07',
          nom: 'Direction obligatoire à la prochaine intersection : à gauche.',
          description: 'Ce panneau interdit par la même occasion de tourner à droite et d\'aller tout droit.',
          commentaire: ''
        },
        {
          image: 'f08',
          nom: 'Directions obligatoires à la prochaine intersection : tout droit ou à droite.',
          description: 'Ce panneau interdit par la même occasion de tourner à gauche.',
          commentaire: ''
        },
        {
          image: 'f09',
          nom: 'Directions obligatoires à la prochaine intersection : tout droit ou à gauche.',
          description: 'Ce panneau interdit par la même occasion de tourner à droite.',
          commentaire: ''
        },
        {
          image: 'f10',
          nom: 'Directions obligatoires à la prochaine intersection : à droite ou à gauche.',
          description: 'Ce panneau interdit par la même occasion de continuer tout droit.',
          commentaire: ''
        },
        {
          image: 'f11',
          nom: 'Piste ou bande obligatoire pour les cycles (vélos) sans side-car ou remorque.',
          description: 'Les autres usagers ne doivent pas y circuler, y stationner ou s\'y arrêter.',
          commentaire: ''
        },
        {
          image: 'f12',
          nom: 'Fin de piste ou bande obligatoire pour cycles (vélo) (vélos) sans side-car ou remorque.',
          description: 'A partir de ce panneau, les cyclistes circulent sur la chaussée.',
          commentaire: ''
        },
        {
          image: 'f13',
          nom: 'Chemin obligatoire pour piétons.',
          description: 'Les autres usagers ne doivent pas y circuler, y stationner ou s\'y arrêter.',
          commentaire: ''
        },
        {
          image: 'f14',
          nom: 'Fin de chemin obligatoire pour piétons.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f15',
          nom: 'Chemin obligatoire pour cavaliers.',
          description: 'Les autres usagers ne doivent pas y circuler, y stationner ou s\'y arrêter.',
          commentaire: ''
        },
        {
          image: 'f16',
          nom: 'Fin de chemin obligatoire pour cavaliers.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f17',
          nom: 'Vitesse minimale obligatoire.',
          description: 'Je ne dois pas rouler à moins de 30 km/h.',
          commentaire: 'En principe, ce panneau n\'est placé que sur les autoroutes ou dans les tunnels.'
        },
        {
          image: 'f18',
          nom: 'Fin de vitesse minimale obligatoire.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f19',
          nom: 'Chaînes à neige obligatoires sur au moins 2 roues motrices.',
          description: 'Si ma voiture est une traction (traction avant), les roues motrices sont les roues avant.',
          commentaire: 'Si ma voiture est une propulsion (traction arrière), les roues motrices sont les roues arrière.'
        },
        {
          image: 'f20',
          nom: 'Fin d\'obligation de l\'usage des chaînes à neige.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f21',
          nom: 'Voie réservée aux véhicules des services réguliers de transport en commun (autobus...).',
          description: 'Les autres usagers ne doivent pas y circuler, y stationner ou s\'y arrêter.',
          commentaire: ''
        },
        {
          image: 'f22',
          nom: 'Fin de voie réservée aux véhicules des services réguliers de transport en commun (autobus...).',
          description: '',
          commentaire: ''
        },
        {
          image: 'f23',
          nom: 'Voie réservée aux tramways.',
          description: 'Les autres usagers ne doivent pas y circuler, y stationner ou s\'y arrêter.',
          commentaire: ''
        },
        {
          image: 'f24',
          nom: 'Fin de voie réservée aux tramways.',
          description: '',
          commentaire: ''
        },
        {
          image: 'f25',
          nom: 'Obligation dont la nature est mentionnée par une inscription sur le panneau.',
          description: 'Ce panneau m\'oblige à allumer mes feux.',
          commentaire: ''
        },
        {
          image: 'f26',
          nom: 'Fin d\'obligation dont la nature est mentionnée par une inscription sur le panneau.',
          description: 'A partir de ce panneau, je peux éteindre mes feux à condition que la luminosité extérieure le permette.',
          commentaire: ''
        }
      ]
    }, {
      type: 'Signaux d\'indications',
      num: 7,
      panneaux: [
        {
          image: 'g01',
          nom: 'Lieu aménagé pour le stationnement.',
          description: 'Ce panneau indique un endroit situé en dehors de la chaussée et réservé au stationnement des véhicules.',
          commentaire: ''
        },
        {
          image: 'g02',
          nom: 'Lieu aménagé pour le stationnement gratuit à durée limitée à 1h30, avec contrôle par disque.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g03',
          nom: 'Lieu aménagé pour le stationnement gratuit à durée limitée avec contrôle par disque.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g04',
          nom: 'Lieu aménagé pour le stationnement payant.',
          description: 'Ce panneau peut être complété par un panonceau précisant le tarif applicable.',
          commentaire: ''
        },
        {
          image: 'g05',
          nom: 'Station d\'autopartage.',
          description: 'Ce panneau indique que l\'arrêt et le stationnement est réservé aux véhicules bénéficiant d\'un label "autopartage".',
          commentaire: ''
        },
        {
          image: 'g06',
          nom: 'Risque d\'incendie.',
          description: 'Ce panneau attire mon attention sur les risques d\'incendie dus à la projection d\'étincelles, de flammèches ou d\'objets incandescents lors du passage des véhicules.',
          commentaire: ''
        },
        {
          image: 'g05',
          nom: 'Vitesse conseillée.',
          description: 'Ce panneau indique la vitesse à laquelle il est conseillé de circuler si les circonstances le permettent.',
          commentaire: ''
        },
        {
          image: 'g06',
          nom: 'Fin de vitesse conseillée.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g07',
          nom: 'Station de taxis.',
          description: 'L\'arrêt et le stationnement sont réservés aux taxis en service sur une étendue signalée par un marquage approprié.',
          commentaire: 'Je ne dois pas y stationner ni m\'y arrêter.'
        },
        {
          image: 'g08',
          nom: 'Arrêt d\'autobus.',
          description: 'L\'arrêt et le stationnement des autres véhicules sont interdits, sur une étendue signalée par des lignes jaunes en forme de zigzag.',
          commentaire: ''
        },
        {
          image: 'g09',
          nom: 'Arrêt de tramway.',
          description: 'L\'arrêt et le stationnement y sont réservés aux tramways.',
          commentaire: 'Je ne dois pas dépasser un tramway pendant son arrêt du côté où s\'effectue la montée ou la descente des voyageurs.'
        },
        {
          image: 'g10',
          nom: 'Emplacement d\'arrêt d\'urgence.',
          description: 'L\'emplacement constitué par un aménagement ponctuel de l\'accotement est réservé aux arrêts d\'urgence.',
          commentaire: 'Ce panneau est utilisé sur les autoroutes, les routes à chaussées séparées et dans les tunnels.'
        },
        {
          image: 'g11',
          nom: 'Circulation à sens unique.',
          description: 'Je ne dois pas faire demi-tour puisque cette manoeuvre m\'engagerait dans le sens interdit.',
          commentaire: ''
        },
        {
          image: 'g12',
          nom: 'Impasse.',
          description: 'Je peux m\'engager dans cette rue, mais je serai obligé de faire demi-tour à un endroit ou un autre car la route est sans issue.',
          commentaire: ''
        },
        {
          image: 'g13',
          nom: 'Impasse comportant une issue pour les piétons.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g14',
          nom: 'Impasse comportant une issue pour les piétons et les cyclistes.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g15',
          nom: 'Présignalisation d\'une impasse.',
          description: 'La rue de droite est sans issue.',
          commentaire: ''
        },
        {
          image: 'g16',
          nom: 'Présignalisation de la praticabilité d\'une section de route.',
          description: 'Le col des fourches est fermé, mais je peux suivre cette route jusqu\'au Monestier.',
          commentaire: ''
        },
        {
          image: 'g17',
          nom: 'Priorité par rapport à la circulation venant en sens inverse.',
          description: 'Ce panneau est placé à l\'entrée d\'un passage étroit. Je bénéficie de la priorité par rapport aux usagers qui arrivent en face, mais je ne dois pas gêner ceux qui sont déjà engagés sur le passage étroit.',
          commentaire: ''
        },
        {
          image: 'g18',
          nom: 'Passage pour piétons.',
          description: 'Ce panneau est placé là où se trouve le passage pour piétons matérialisé par le marquage blanc sur la chaussée.',
          commentaire: 'Je dois laisser la priorité à tout piéton engagé.'
        },
        {
          image: 'g19',
          nom: 'Surélévation de la chaussée (ralentisseur).',
          description: 'Ce panneau est placé au niveau du ralentisseur.',
          commentaire: 'Je ne roule pas à plus de 30 km/h pour ne pas endommager mes amortisseurs.'
        },
        {
          image: 'g20',
          nom: 'Traversée de tramways.',
          description: 'Ce panneau est placé là où traversent les voies du tramway.',
          commentaire: 'La traversée de la voie peut être interrompue par un feu rouge clignotant.'
        },
        {
          image: 'g21',
          nom: 'Stationnement réglementé pour les caravanes et les autocaravanes (camping-cars).',
          description: 'Ce panneau est implanté dans les communes où le stationnement des caravanes et camping-cars est limité ou interdit.',
          commentaire: ''
        },
        {
          image: 'g22',
          nom: 'La voie de circulation en sens inverse est réservée aux autobus.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g23',
          nom: 'La voie de droite est réservée aux usagers qui tournent à droite.',
          description: 'Si je désire aller tout droit, j\'emprunte la voie du milieu.',
          commentaire: ''
        },
        {
          image: 'g24',
          nom: 'Conditions particulières de circulation sur la route ou la voie transversale.',
          description: 'Si je tourne à droite, je traverserai un passage à niveau avec barrières à fonctionnement manuel.',
          commentaire: ''
        },
        {
          image: 'g25',
          nom: 'Rappel des limites de vitesse sur autoroute.',
          description: 'La vitesse est limitée à 130 Km/h par temps sec et, à 110 Km/h par temps de pluie ou autres précipitations comme le confirme le symbole.',
          commentaire: ''
        },
        {
          image: 'g26',
          nom: 'Voie de détresse à droite.',
          description: 'Cette voie ne doit être utilisée que par les véhicules qui risquent de ne pas pouvoir s\'arrêter en raison d\'une défaillance du système de freinage.',
          commentaire: 'Après l\'étendue peinte en rouge et blanc, une épaisse couche de sable permettra d\'arrêter le véhicule en l\'enlisant.'
        },
        {
          image: 'g27',
          nom: 'Réduction du nombre de voies sur une route à chaussées séparées.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g28',
          nom: 'Présignalisation d\'un créneau de dépassement ou d\'une section de route à chaussées séparées.',
          description: 'Les deux sens de circulation seront séparés par une ligne continue sur une chaussée à double sens, ou par un terre-plein central sur une route à chaussées séparées.',
          commentaire: ''
        },
        {
          image: 'g29',
          nom: 'Créneau de dépassement à 3 voies affectées :',
          description: '- 2 voies dans mon sens de circulation\n- une seule voie dans le sens opposé',
          commentaire: ''
        },
        {
          image: 'g30',
          nom: 'Fin d\'un créneau de dépassement à trois voies affectées.',
          description: 'La voie de gauche va être supprimée.',
          commentaire: 'Je ne peux plus dépasser.'
        },
        {
          image: 'g31',
          nom: 'Section de route à 3 voies affectées :',
          description: '- 1 voie dans mon sens de circulation\n- 2 voies dans le sens opposé',
          commentaire: ''
        },
        {
          image: 'g32',
          nom: 'Indications diverses.',
          description: 'Ce type de panneau est implanté lorsqu\'il est nécessaire de faire connaître aux usagers certaines dispositions relatives aux conditions de circulation.',
          commentaire: 'Il permet par exemple comme ici, de signaler une exception à la règle interdisant l\'arrêt sur le trottoir (\'arrêt autorisé sur trottoir\').'
        },
        {
          image: 'g33',
          nom: 'Présignalisation du début d\'une section à péage.',
          description: 'Si je ne désire pas m\'engager sur la section à péage, je peux changer de direction à la sortie ou à l\'intersection qui se trouve à 1500 mètres.',
          commentaire: ''
        },
        {
          image: 'g34',
          nom: 'Présignalisation d\'une gare de péage permettant le retrait d\'un ticket ou le paiement du péage.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g35',
          nom: 'Présignalisation du paiement du péage.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g36',
          nom: 'Paiement auprès d\'un péagiste.',
          description: 'Ce panneau est implanté à proximité d\'un péage.',
          commentaire: ''
        },
        {
          image: 'g37',
          nom: 'Paiement automatique par pièces et billets.',
          description: 'Ce panneau est implanté à proximité d\'un péage.',
          commentaire: ''
        },
        {
          image: 'g39',
          nom: 'Paiement par abonnement.',
          description: 'Certaines voies sont réservées aux usagers abonnés.',
          commentaire: ''
        },
        {
          image: 'g40',
          nom: 'Route à accès réglementé.',
          description: 'Ce signal annonce le début d\'une route réservée à la circulation automobile.',
          commentaire: 'La vitesse maximale est fixée à 110 Km/h si la route est à deux chaussées séparées par un terre-plein central, à 90 km/h si elle est à double sens.'
        },
        {
          image: 'g41',
          nom: 'Fin de route à accès réglementé.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g42',
          nom: 'Entrée d\'un tunnel où il est interdit de faire demi-tour, de s\'arrêter et de stationner en dehors des emplacements d\'arrêt d\'urgence prévus à cet effet, et où l\'allumage des feux de croisement est obligatoire.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g43',
          nom: 'Sortie de tunnel.',
          description: 'Ce signal indique la fin des interdictions et obligations édictées par le panneau d\'entrée.',
          commentaire: ''
        },
        {
          image: 'g44',
          nom: 'Aire piétonne.',
          description: 'Ce signal marque l\'entrée d\'une zone prévue pour la circulation des piétons et des cyclistes roulant à l\'allure du pas.',
          commentaire: 'La circulation des voitures est interdite. Les cyclistes peuvent rouler au pas.'
        },
        {
          image: 'g45',
          nom: 'Fin d\'aire piétonne.',
          description: 'Ce signal indique la fin des réglementations édictées par le panneau précédent (C109).',
          commentaire: ''
        },
        {
          image: 'g46',
          nom: 'Entrée d\'une zone de rencontre.',
          description: 'Ouverte à la circulation de tous les usagers.',
          commentaire: '- la vitesse est limitée à 20 km/h\n- les piétons sont prioritaires\n- les piétons sont autorisés à circuler sur la chaussée\n- le stationnement en dehors des emplacements est interdit.'
        },
        {
          image: 'g47',
          nom: 'Sortie d\'une zone de rencontre.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g48',
          nom: 'Piste ou bande cyclable conseillée et réservée aux cycles (vélos) à deux ou trois roues.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g49',
          nom: 'Fin d\'une piste ou d\'une bande cyclable conseillée et réservée aux cycles (vélos) à deux ou trois roues.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g50',
          nom: 'Voie verte.',
          description: 'Réservée à la circulation des piétons et des véhicules non motorisés.',
          commentaire: ''
        },
        {
          image: 'g51',
          nom: 'Fin de voie verte.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g52',
          nom: 'Entrée d\'autoroute.',
          description: 'Ce signal annonce le début de l\'application des règles particulières de circulation sur autoroute.',
          commentaire: 'La vitesse maximum est de 130 km/h et 110 par temps de pluie.'
        },
        {
          image: 'g53',
          nom: 'Sortie d\'autoroute.',
          description: 'Ce signal annonce la fin de l\'application des règles particulières de circulation sur autoroute.',
          commentaire: 'A partir de ce signal, j\'applique à nouveau les règles générales de circulation sur route.'
        },
        {
          image: 'g54',
          nom: 'Annonce d\'une zone où la vitesse est contrôlée par un ou des radars automatiques.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g55',
          nom: 'Annonce d\'une zone où la vitesse est contrôlée par un ou des radars automatiques.',
          description: 'Panneau placé 1 à 2 Km avant le premier radar.',
          commentaire: ''
        },
        {
          image: 'g56',
          nom: 'Poste de secours.',
          description: 'Ce panneau peut également être utilisé pour annoncer un hôpital ou une clinique assurant un service d\'urgence.',
          commentaire: ''
        },
        {
          image: 'g57',
          nom: 'Poste d\'appel d\'urgence.',
          description: 'Ce poste est accessible en permanence à toute personne ayant besoin de secours. L\'appel est gratuit.',
          commentaire: ''
        },
        {
          image: 'g58',
          nom: 'Cabine téléphonique publique.',
          description: 'Les appels sont payants, mais je peux appeler gratuitement les numéros d\'urgence (15, 17, 18...).',
          commentaire: ''
        },
        {
          image: 'g59',
          nom: 'Terrain de camping pour tentes.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g60',
          nom: 'Terrain de camping pour caravanes et autocaravanes (camping-cars).',
          description: '',
          commentaire: ''
        },
        {
          image: 'g61',
          nom: 'Terrain de camping pour tentes, caravanes et autocaravanes (camping-cars).',
          description: '',
          commentaire: ''
        },
        {
          image: 'g62',
          nom: 'Auberge de jeunesse.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g63',
          nom: 'Chambre d\'hôtes ou gîte.',
          description: 'Ce panneau indique la proximité d\'une chambre d\'hôtes ou d\'un gîte situé hors agglomération.',
          commentaire: ''
        },
        {
          image: 'g64',
          nom: 'Emplacement pour pique-nique.',
          description: 'Ce panneau indique un emplacement situé en plein air et aménagé pour prendre des repas.',
          commentaire: ''
        },
        {
          image: 'g65',
          nom: 'Embarcadère.',
          description: 'Ce panneau indique un lieu d\'embarquement de véhicules et de personnes à bord d\'un navire ou d\'un bac.',
          commentaire: ''
        },
        {
          image: 'g66',
          nom: 'Installations accessibles aux personnes handicapées à mobilité réduite.',
          description: 'Ce panneau est implanté lorsque tous les services signalés sont accessibles aux handicapés.',
          commentaire: ''
        },
        {
          image: 'g67',
          nom: 'Poste de distribution de carburant ouvert 7 jours sur 7 et 24 heures sur 24.',
          description: 'Ce panneau est implanté sur les autoroutes et routes à chaussées séparées.',
          commentaire: ''
        },
        {
          image: 'g68',
          nom: 'Poste de distribution de carburant ouvert 7 jours sur 7 et 24 heures sur 24 assurant également le ravitaillement en gaz de pétrole liquéfié (G.P.L.).',
          description: 'Ce panneau est implanté sur les autoroutes et routes à chaussées séparées.',
          commentaire: ''
        },
        {
          image: 'g69',
          nom: 'Restaurant ouvert 7 jours sur 7.',
          description: 'Ce panneau indique un restaurant implanté sur une aire de service d\'une route à chaussées séparées ou d\'une autoroute.',
          commentaire: ''
        },
        {
          image: 'g70',
          nom: 'Hôtel ou motel ouvert 7 jours sur 7.',
          description: 'Ce panneau indique la présence d\'un hôtel ou motel implanté sur une aire de service d\'une route à chaussées séparées ou d\'une autoroute.',
          commentaire: ''
        },
        {
          image: 'g71',
          nom: 'Débit de boissons (café) ou établissement proposant des collations sommaires (repas légers) ouvert 7 jours sur 7.',
          description: 'Ce panneau est implanté sur une aire de service d\'une route à chaussées séparées ou d\'une autoroute.',
          commentaire: ''
        },
        {
          image: 'g72',
          nom: 'Fréquence d\'émission d\'une station de radiodiffusion donnant des informations sur la circulation routière et l\'état des routes.',
          description: 'Ce panneau précise qu\'en écoutant la radio sur la fréquence indiquée, je recevrai 7 jours sur 7 et 24 heures sur 24 des informations sur la circulation routière et l\'état des routes.',
          commentaire: ''
        },
        {
          image: 'g79',
          nom: 'Jeux d\'enfants.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g74',
          nom: 'Station de vidange des eaux usées pour caravanes, autocaravanes (camping-cars) et cars.',
          description: 'Attention, cet endroit n\'est pas prévu pour effectuer une vidange de l\'huile du moteur.',
          commentaire: ''
        },
        {
          image: 'g75',
          nom: 'Station de gonflage gratuit située hors station-service.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g76',
          nom: 'Point de détente.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g77',
          nom: 'Point de départ d\'un itinéraire pédestre.',
          description: '',
          commentaire: ''
        },
        {
          image: 'g78',
          nom: 'Poste de dépannage.',
          description: 'Ce panneau, implanté sur autoroutes et routes à chaussées séparées, annonce un atelier de dépannage rapide, ouvert 7 jours sur 7 et 24 heures sur 24.',
          commentaire: ''
        },
        {
          image: 'g79',
          nom: 'Moyen de lutte contre l\'incendie.',
          description: 'Ce panneau est principalement implanté dans les tunnels.',
          commentaire: ''
        },
        {
          image: 'g80',
          nom: 'Issue de secours vers la droite.',
          description: 'Ce panneau est principalement utilisé dans les tunnels pour indiquer les sorties de secours.',
          commentaire: ''
        },
        {
          image: 'g81',
          nom: 'Installations ou services divers.',
          description: 'Ce panneau signale des installations ou des établissements pouvant être utiles aux usagers et pour lesquels il n\'existe pas de panneau spécifique.',
          commentaire: ''
        },
        {
          image: 'g82',
          nom: 'Point de station de distribution "écotaxe".\nTaxe nationale sur les véhicules de transport de marchandise.',
          description: '',
          commentaire: ''
        }
      ]
    }, {
      type: 'Balises',
      num: 8,
      panneaux: [
        {
          image: 'k01',
          nom: 'Balise d\'intersection.',
          description: 'Cette balise sert à signaler la position d\'une intersection. Elle la rend plus visible.',
          commentaire: ''
        },
        {
          image: 'k02',
          nom: 'Balise de virage.',
          description: 'Ces balises jalonnent le tracé du virage.',
          commentaire: ''
        },
        {
          image: 'k03',
          nom: 'Balise de virage.',
          description: 'Cette balise avec le capuchon rouge a la même signification que la précédente, mais elle est implantée dans les régions fréquemment enneigées.',
          commentaire: ''
        },
        {
          image: 'k04',
          nom: 'Délinéateur.',
          description: 'Les délinéateurs servent à me guider en délimitant les bords de la chaussée.',
          commentaire: ''
        },
        {
          image: 'k05',
          nom: 'Balise de virage.',
          description: 'Elles jalonnent des virages significativement dangereux.',
          commentaire: 'Elles peuvent également matérialiser un rétrécissement de la chaussée.'
        },
        {
          image: 'k06',
          nom: 'Tête d\'îlot directionnel à contournement par la droite.',
          description: 'Je passe à droite de l\'îlot.',
          commentaire: ''
        },
        {
          image: 'k07',
          nom: 'Signalisation d\'obstacle.',
          description: 'Cette balise est implantée pour signaler de petits obstacles à proximité immédiate de la chaussée.',
          commentaire: ''
        }
      ]
    }, {
      type: 'Panonceaux',
      num: 9,
      panneaux: [
        {
          image: 'l01',
          nom: 'Panonceau de distance.',
          description: 'Il précise la distance à laquelle se trouve le danger, la prescription ou l\'indication signalée par le panneau.',
          commentaire: 'Ici, le sens interdit est à 50 mètres; je peux m\'engager dans cette rue mais devrai changer de direction à 50 mètres.'
        },
        {
          image: 'l02',
          nom: 'Panonceau d\'étendue.',
          description: 'Il précise sur quelle distance s\'étend le danger, la prescription ou l\'indication signalée par le panneau.',
          commentaire: 'Ici, je vais rencontrer une succession de virages dangereux sur une distance de 500 mètres.'
        },
        {
          image: 'l03',
          nom: 'Panonceau indiquant la position de la voie concernée par le panneau.',
          description: 'Seuls les usagers qui tournent à droite seront limités à 70 km/h.',
          commentaire: ''
        },
        {
          image: 'l04',
          nom: 'Panonceau d\'indications diverses par inscription.',
          description: 'La vitesse est limitée à 50 km/h avant et après le panneau.',
          commentaire: ''
        },
        {
          image: 'l05',
          nom: 'Panonceau indiquant la direction à suivre pour rencontrer le service indiqué par le panneau.',
          description: 'Si je tourne à gauche, je me dirigerai vers un emplacement pour pique-nique.',
          commentaire: ''
        },
        {
          image: 'l06',
          nom: 'Le stationnement ou l\'arrêt est considéré comme gênant. Le véhicule en infraction peut être mis en fourrière.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l07',
          nom: 'Le stationnement est réservé aux véhicules utilisés par les personnes handicapées à mobilité réduite : grands invalides civils, grands invalides de guerre ou titulaires d\'un titre mentionné au code des collectivités territoriales.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l08',
          nom: 'Stationnement à durée limitée avec contrôle par disque.',
          description: 'Ce panonceau indique qu\'entre 9h à 17h, la durée du stationnement est limitée à 30 mn.',
          commentaire: ''
        },
        {
          image: 'l09',
          nom: 'Le stationnement est interdit à partir du panneau.',
          description: 'Je peux stationner avant le panneau, mais pas après.',
          commentaire: ''
        },
        {
          image: 'l10',
          nom: 'Le stationnement est interdit jusqu\'au panneau.',
          description: 'Je ne peux pas stationner avant le panneau, mais je pourrai le faire après.',
          commentaire: ''
        },
        {
          image: 'l11',
          nom: 'Le stationnement et l\'arrêt sont interdits avant et après le panneau.',
          description: 'C\'est un rappel de l\'interdiction de stationner et de s\'arrêter.',
          commentaire: ''
        },
        {
          image: 'l12',
          nom: 'Le stationnement et l\'arrêt sont interdits à droite du panneau.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l13',
          nom: 'Le stationnement est interdit à droite et à gauche du panneau.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l14',
          nom: 'Arrêt et stationnement réservés aux véhicules bénéficiant du label "autopartage".',
          description: '',
          commentaire: ''
        },
        {
          image: 'l15',
          nom: 'Panonceau indiquant que le panneau qu\'il complète concerne la voie au-dessus de laquelle il est implanté.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l16',
          nom: 'Ce panonceau désigne tous les véhicules de transport de marchandises quel que soit leur poids.',
          description: 'Les camionnettes sont concernées par ce panonceau. En revanche, les véhicules de transport en commun ne sont pas concernés.',
          commentaire: ''
        },
        {
          image: 'l17',
          nom: 'Ce panonceau désigne les véhicules de transport de marchandises de plus de 4,5 tonnes.',
          description: 'Les camionnettes ne sont pas concernées par ce panonceau, puisque leur poids total autorisé en charge ne peut dépasser 3,5 tonnes.',
          commentaire: ''
        },
        {
          image: 'l18',
          nom: 'Ce panonceau désigne les installations aménagées pour handicapés physiques.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l19',
          nom: 'Ce panonceau désigne les véhicules tractant une remorque dont le poids total autorisé en charge dépasse 250 kg.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l20',
          nom: 'Ce panonceau désigne les véhicules tractant une caravane ou une remorque de plus de 250 kg',
          description: '(et dont le poids total roulant, véhicule plus remorque n\'excède pas 3,5 tonnes).',
          commentaire: ''
        },
        {
          image: 'l21',
          nom: 'Risque de heurt de véhicules lents',
          description: '',
          commentaire: ''
        },
        {
          image: 'l22',
          nom: 'Panonceau d\'indications diverses par inscription.',
          description: 'La chaussée est particulièrement glissante par temps de pluie.',
          commentaire: ''
        },
        {
          image: 'l23',
          nom: 'Ce panonceau signale que le stationnement est réservé aux véhicules électriques pendant la durée de recharge de leurs accumulateurs.',
          description: 'Les autres véhicules ne doivent pas stationner mais peuvent s\'arrêter.',
          commentaire: ''
        },
        {
          image: 'l24',
          nom: 'Sens interdit sauf aux cyclistes',
          description: '',
          commentaire: ''
        },
        {
          image: 'l25',
          nom: 'Panonceau indiquant le numéro d\'une route ou d\'une autoroute.',
          description: 'J\'entre sur l\'autoroute A75.',
          commentaire: ''
        },
        {
          image: 'l26',
          nom: 'Panonceau indiquant le nom d\'un site ou de certains services.',
          description: 'Le terrain de camping a pour nom \'les Flots Bleus\'.',
          commentaire: ''
        },
        {
          image: 'l27',
          nom: 'Ce panonceau signale les dérogations aux prescriptions qui s\'appliquent à une route à accès réglementé.',
          description: 'Ici, les véhicules agricoles, dont l\'accès est habituellement interdit sur ce type de route, sont autorisés à circuler.',
          commentaire: ''
        },
        {
          image: 'l28',
          nom: 'Ce panonceau signale les prescriptions qui s\'appliquent dans une aire piétonne.',
          description: 'La circulation dans cette aire piétonne est interdite, sauf entre 19 h et 9 h.',
          commentaire: ''
        },
        {
          image: 'l29',
          nom: 'Lieu de stationnement où des places sont réservées aux véhicules bénéficiant du label "autopartage".',
          description: '',
          commentaire: ''
        },
        {
          image: 'l30',
          nom: 'Panonceau associé à un panneau temporaire de danger.',
          description: 'Je vais rencontrer des travaux à 50 mètres.',
          commentaire: ''
        },
        {
          image: 'l31',
          nom: 'Panonceau indiquant le numéro de l\'échangeur.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l32',
          nom: 'Panonceau indiquant que l\'emplacement d\'arrêt d\'urgence est doté d\'un poste d\'appel d\'urgence et d\'un moyen de lutte contre l\'incendie.',
          description: '',
          commentaire: ''
        },
        {
          image: 'l33',
          nom: 'Panonceau qui désigne les véhicules bénéficiant d\'un label "autopartage".',
          description: '',
          commentaire: ''
        },
        {
          image: 'l34',
          nom: 'Panonceau qui signale que l\u2019arrêt ou stationnement est réservé aux véhicules bénéficiant du label "autopartage".',
          description: '',
          commentaire: ''
        }
      ]
    }, {
      type: 'Signalisations temporaires',
      num: 10,
      panneaux: [
        {
          image: 'n01',
          nom: 'Cassis ou dos-d\'âne.',
          description: 'Un cassis est un creux; un dos-d\'âne est une bosse.',
          commentaire: ''
        },
        {
          image: 'n02',
          nom: 'Chaussée rétrécie.',
          description: 'La chaussée peut être rétrécie par la droite, par la gauche ou des deux côtés, car c\'est le seul panneau temporaire qui annonce un rétrécissement de la chaussée.',
          commentaire: ''
        },
        {
          image: 'n03',
          nom: 'Chaussée glissante.',
          description: 'Ce panneau peut être complété par un panonceau (exemple : \'risque de verglas\', \'boue\').',
          commentaire: ''
        },
        {
          image: 'n04',
          nom: 'Travaux.',
          description: 'Ce panneau impose le respect d\'une règle élémentaire de prudence consistant à adapter ma vitesse aux éventuelles difficultés du passage en vue d\'assurer :\n- ma propre sécurité\n- la sécurité des autres usagers de la route\n- la sécurité des travailleurs.',
          commentaire: ''
        },
        {
          image: 'n05',
          nom: 'Danger non précisé.',
          description: 'La nature du danger peut être précisée par une inscription sur un panonceau (exemple : sortie de camions).',
          commentaire: ''
        },
        {
          image: 'n06',
          nom: 'Annonce de feux tricolores réglant la circulation.',
          description: '',
          commentaire: ''
        },
        {
          image: 'n07',
          nom: 'Projection de gravillons.',
          description: 'Je dois ralentir en raison :\n- Des risques de dérapage occasionnés par les graviers\n- Du risque de projection de gravillons sur mon véhicule, les autres véhicules et les travailleurs.',
          commentaire: ''
        },
        {
          image: 'n08',
          nom: 'Bouchon.',
          description: '',
          commentaire: ''
        },
        {
          image: 'n09',
          nom: 'Accident.',
          description: '',
          commentaire: ''
        },
        {
          image: 'n09_2',
          nom: 'Nappes de brouillard ou de fumées épaisses.',
          description: '',
          commentaire: ''
        },
        {
          image: 'n10',
          nom: 'Barrage.',
          description: 'Signalisation de position de travaux ou de tout autre obstacle de caractère temporaire.',
          commentaire: 'Sur la face opposée de ce panneau, la mention \'Fin de chantier\' est inscrite lorsque la zone de travaux prend fin.'
        },
        {
          image: 'n11',
          nom: 'Signal de position d\'une déviation ou d\'un rétrécissement temporaire de chaussée.',
          description: '',
          commentaire: ''
        },
        {
          image: 'n12',
          nom: 'Signal servant à régler manuellement la circulation.',
          description: 'Il s\'agit de panneaux mobiles à double face, actionnés par des ouvriers du chantier.',
          commentaire: 'Panneau vert : je m\'engage.\nPanneau rouge : je m\'arrête.'
        },
        {
          image: 'n13',
          nom: 'Indication de chantier important ou de situations diverses (\'circulation alternée\', \'barrière de dégel\', \'route barrée\').',
          description: 'Ce panneau annonce que la route sera barrée à 300 mètres.',
          commentaire: ''
        },
        {
          image: 'n14',
          nom: 'Présignalisation de changement de chaussée.',
          description: 'Ce panneau, placé sur les routes à chaussées séparées et sur les autoroutes, annonce un basculement de la circulation sur la chaussée en face.',
          commentaire: 'Je vais changer de chaussée et la circulation sera donc provisoirement à double sens.'
        },
        {
          image: 'n14_2',
          nom: 'Annonce de la réduction d\'une voie.',
          description: 'La voie de droite sera supprimée.',
          commentaire: ''
        },
        {
          image: 'n14_3',
          nom: 'Annonce, en signalisation d?urgence, de la réduction de plusieurs voies sur routes à chaussées séparées',
          description: '',
          commentaire: ''
        },
        {
          image: 'n15',
          nom: 'Présignalisation d\'une déviation.',
          description: 'Ce panneau concerne toutes les catégories de véhicules.',
          commentaire: 'A 500 mètres, je devrai tourner à droite.'
        },
        {
          image: 'n16',
          nom: 'Présignalisation d\'une déviation.',
          description: 'Pour suivre la déviation, je tournerai à droite à la prochaine intersection.',
          commentaire: ''
        },
        {
          image: 'n17',
          nom: 'Direction de déviation.',
          description: 'Pour suivre la déviation, je tourne à droite avant ce panneau.',
          commentaire: ''
        },
        {
          image: 'n18',
          nom: 'Fin de déviation.',
          description: 'Ce panneau est placé de 100 à 200 mètres avant l\'intersection sur laquelle je retrouve l\'itinéraire normal. Il n\'est pas implanté de façon systématique.',
          commentaire: ''
        },
        {
          image: 'n19',
          nom: 'Direction de la déviation pour aller à LILLE.',
          description: 'Il porte le nom de la ville atteinte par la déviation et concerne toutes les catégories de véhicules.',
          commentaire: 'Pour aller à LILLE, je tourne à droite avant le panneau.'
        },
        {
          image: 'n20',
          nom: 'Présignalisation de déviation.',
          description: 'Ce panneau est employé lorsque plusieurs itinéraires de déviation peuvent se croiser.',
          commentaire: ''
        },
        {
          image: 'n21',
          nom: 'Présignalisation de déviation qui ne concerne que les véhicules de transport de marchandises de plus de 12 tonnes.',
          description: 'Avec ma voiture, je peux aussi bien continuer tout droit que tourner à gauche.',
          commentaire: ''
        },
        {
          image: 'n22',
          nom: 'Signaux tricolores d\'alternat temporaire.',
          description: 'En présence de travaux, la circulation peut être alternée par des feux tricolores. Dans ce cas, ces feux sont annoncés par un panneau de danger.',
          commentaire: 'Le feu vert est remplacé par un feu jaune clignotant situé en bas. Ce feu passera ensuite au \'jaune fixe\' et au \'rouge\'.'
        }
      ]
    }, {
      type: 'Signaux de danger',
      num: 11,
      panneaux: [
        {
          image: 'o01',
          nom: 'Présignalisation d\'affectation de voies de sortie numérotée.',
          description: 'La sortie n° 13 qui conduit à COGNAC est à 500 mètres. Je dois dès maintenant choisir ma voie.',
          commentaire: 'Si je continue sur l\'autoroute A20 en direction de TOULOUSE, j\'emprunte la voie du milieu.\nSi je quitte l\'autoroute pour suivre la direction de COGNAC, je reste dans la voie de droite.'
        },
        {
          image: 'o02',
          nom: 'Sortie numérotée avec affectation de voies.',
          description: 'Tout changement de voie doit être achevé avant ces panneaux placés au début de la bretelle de sortie n° 13.',
          commentaire: 'Si je continue sur l\'autoroute A20 en direction de TOULOUSE, je dois être dans la voie du milieu.\nSi je quitte l\'autoroute pour suivre la direction de COGNAC, je dois être dans la voie de droite.'
        },
        {
          image: 'o03',
          nom: 'Annonce de la prochaine bifurcation autoroutière.',
          description: 'Ce premier panneau annonce la bifurcation plusieurs kilomètres avant.',
          commentaire: 'Si je vais à CLERMONT FERRAND, je quitterai cette autoroute à 21 km pour emprunter l\'A67.'
        },
        {
          image: 'o04',
          nom: 'Avertissement de bifurcation autoroutière simple.',
          description: 'A 2000 mètres, je pourrai continuer tout droit sur l\'autoroute A10 en direction de BORDEAUX ou tourner à droite sur l\'A67 en direction de CLERMONT FERRAND.',
          commentaire: ''
        },
        {
          image: 'o05',
          nom: 'Présignalisation de bifurcation autoroutière.',
          description: 'A 1000 mètres, je pourrai quitter cette autoroute pour emprunter l\'A67 en direction de CLERMONT FERRAND.',
          commentaire: ''
        },
        {
          image: 'o06',
          nom: 'Bifurcation autoroutière.',
          description: 'Ces panneaux sont placés à l\'endroit où débute la voie de décélération qui permet de rejoindre l\'autoroute A67 pour suivre la direction de CLERMONT FERRAND.',
          commentaire: 'Pour aller à CLERMONT FERRAND, j\'emprunte cette voie de décélération dès son début.\nPour aller à BORDEAUX, je continue tout droit sur l\'autoroute A10.'
        },
        {
          image: 'o07',
          nom: 'Avertissement de bifurcation autoroutière avec affectation de voies.',
          description: 'Il y a affectation de voies lorsque le nombre de voies est réduit après la sortie.',
          commentaire: 'A 1000 mètres, je pourrai aller tout droit pour suivre l\'autoroute A20 en direction de TOULOUSE ou tourner à droite pour rejoindre l\'autoroute A75 en direction de MONTPELLIER.\nSi je vais à MONTPELLIER, je reste dans la voie de droite.'
        },
        {
          image: 'o08',
          nom: 'Présignalisation d\'affectation de voies de bifurcation autoroutière.',
          description: 'A 500 mètres, je pourrai suivre l\'autoroute A20 en direction de TOULOUSE ou la quitter pour emprunter l\'A75.',
          commentaire: 'Je dois dès maintenant choisir la voie qui correspond à ma direction.\nSi je vais à TOULOUSE, j\'emprunterai la voie du milieu.\nSi je vais à MONTPELLIER, j\'emprunterai la voie de droite.'
        },
        {
          image: 'o09',
          nom: 'Affectation de voies de bifurcation autoroutière.',
          description: 'Tout changement de voie doit être achevé avant ces panneaux placés au début de la bretelle de bifurcation.',
          commentaire: 'En restant sur la voie de droite, je quitte l\'autoroute A20 et la direction de TOULOUSE pour emprunter l\'A75 en direction de MONTPELLIER.'
        },
        {
          image: 'o10',
          nom: 'Annonce d\'une bifurcation autoroutière.',
          description: 'A 17 km, je pourrai emprunter au choix l\'autoroute A7 ou A9.',
          commentaire: ''
        },
        {
          image: 'o11',
          nom: 'Présignalisation complémentaire de bifurcation autoroutière comportant des numéros d\'autoroute.',
          description: 'A 3000 mètres, je pourrai emprunter au choix l\'autoroute A7 ou A9.',
          commentaire: ''
        },
        {
          image: 'o12',
          nom: 'Présignalisation complémentaire de bifurcation autoroutière ne comportant pas de numéros d\'autoroutes.',
          description: '',
          commentaire: ''
        },
        {
          image: 'o12_2',
          nom: 'Distance de sécurité minimum que doivent laisser entr\'eux 2 véhicules qui se suivent sur autoroute ou sur route à 2 chaussées séparées.',
          description: '',
          commentaire: ''
        }
      ]
    }]

  ngOnInit(): void {
      }
      submit(){
        this.datas.forEach(element => {
          this.apiService.addSignalisation(element).subscribe(
            (res:any)=>{
              console.log(res)
            }
          )
        });
      }
    }
