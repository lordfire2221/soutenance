import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor(public db: AngularFirestore) { }
  
  // createUsers(value: any) {
  //   return this.db.collection('admin').add(value);
  // }
  // createApprenants(value: any) {
  //   return this.db.collection('apprenants').add(value);
  // }
  // createProgramme(value: any) {
  //   return this.db.collection('programmes').add(value);
  // }
  // modifyApprenant(value: any,id:any) {
  //   return this.db.doc(`apprenants/${id}`).update(value);
  // }
  // modifyAdmin(value: any,id:any) {
  //   return this.db.doc(`admin/${id}`).update(value);
  // }
  // modifyPrgm(value: any,id:any) {
  //   return this.db.doc(`programmes/${id}`).update(value);
  // }
  // modifyCours(value: any,id:any) {
  //   return this.db.doc(`cours/${id}`).update(value);
  // }
  // modifyExos(value: any,id:any) {
  //   return this.db.doc(`revisions/${id}`).update(value);
  // }
  // validate(id:any) {
  //   return this.db.doc(`apprenants/${id}`).update({statut:true});
  // }
  // validateAdmin(id:any) {
  //   return this.db.doc(`admin/${id}`).update({statut:true});
  // }
  // desactivateDisp(id:any) {
  //   return this.db.doc(`disponibilites/${id}`).update({programed:true});
  // }
  // desactivatePres(id:any) {
  //   return this.db.doc(`presences/${id}`).update({status:false});
  // }
  // activate(id:any) {
  //   return this.db.doc(`disponibilites/${id}`).update({programed:true});
  // }
  // activatePresence(id:any) {
  //   return this.db.doc(`presences/${id}`).update({status:true});
  // }
  // activateAdmin(id:any) {
  //   return this.db.doc(`admin/${id}`).update({programed:true});
  // }
  // createRev(value: any) {
  //   return this.db.collection('revisions').add(value);
  // }
  // createImage(value: any) {
  //   return this.db.collection('images').add(value);
  // }
  // desactivate(id:any) {
  //   return this.db.doc(`apprenants/${id}`).update({statut:false});
  // }
  // desactivateAdmin(id:any) {
  //   return this.db.doc(`admin/${id}`).update({statut:false});
  // }
  // getApprenants(limit:number) {
  //   return this.db.collection("apprenants",ref=>ref.limit(limit).where("statut","==",false)).valueChanges({idField:'id'});
  // }
  // getAdmins(limit:number) {
  //   return this.db.collection("apprenants",ref=>ref.limit(limit).where("statut","==",false)).valueChanges({idField:'id'});
  // }
  // getApprenantDatas(uid:string) {
  //   return this.db.collection("apprenants",ref=>ref.where("uid","==",uid)).valueChanges({idField:'id'});
  // }
  // getApprenant(id:string) {
  //   return this.db.collection("apprenants").doc(id).valueChanges({idField:'id'});
  // }
  // getAdmin(id:string) {
  //   return this.db.collection("admin").doc(id).valueChanges({idField:'id'});
  // }
  // getAdminSingle(email:string) {
  //   return this.db.collection("admin",ref=>ref.where("email","==",email)).valueChanges({idField:'id'});
  // }
  // testAdmin(email:string) {
  //   return this.db.collection("admin",ref=>ref.where("email","==",email)).get();
  // }
  // getCours(limit:number) {
  //   return this.db.collection("cours",ref=>ref.limit(limit)).valueChanges({idField:'id'});
  // }
  // getImages(type:string) {
  //   return this.db.collection("images",ref=>ref.where("type",'==',type)).valueChanges({idField:'id'});
  // }
  // getExos(limit:number) {
  //   return this.db.collection("revisions",ref=>ref.limit(limit).orderBy('num')).valueChanges({idField:'id'});
  // }
  // getDisponibilite(type:string) {
  //   return this.db.collection('disponibilites', ref => ref.where("type",'==',type).where("programed",'==',false)).valueChanges({ idField: 'id' });
  // }
  // getDisponibiliteT(type:string) {
  //   return this.db.collection('disponibilites', ref => ref.where("type",'==',type).where("programed",'==',true)).valueChanges({ idField: 'id' });
  // }
  // getDisponibiliteSingle(uid: any, type: string) {
  //   return this.db.collection('disponibilites', ref => ref.where("uid", '==', uid).where("type", '==', type)).valueChanges({ idField: 'id' });
  // }
  // getCoursSingle(id:string) {
  //   return this.db.collection("cours").doc(id).valueChanges({idField:'id'});
  // }
  // getExo(id:string) {
  //   return this.db.collection('revisions').doc(id).valueChanges({ idField: 'id' });
  // }
  // getProgramme(type:string) {
  //   return this.db.collection('programmes', ref => ref.where("type",'==',type).orderBy("jour")).valueChanges({ idField: 'id' });
  // }
  // getPresences() {
  //   return this.db.collection('presences', ref => ref.where("status",'==',true)).valueChanges({ idField: 'id' });
  // }
  // getPresencesPending() {
  //   return this.db.collection('presences', ref => ref.where("status",'==',false)).valueChanges({ idField: 'id' });
  // }
  // getPresencesSignle(uid:string) {
  //   return this.db.collection('presences', ref => ref.where("status",'==',true).where("uid",'==',uid)).valueChanges({ idField: 'id' });
  // }
  // getProgrammeSingle(id:string) {
  //   return this.db.collection('programmes').doc(id).valueChanges({ idField: 'id' });
  // }
  // getApprenantsT(limit:number) {
  //   return this.db.collection("apprenants",ref=>ref.limit(limit)).valueChanges({idField:'id'});
  // }
  // getAdminT(limit:number) {
  //   return this.db.collection("admin",ref=>ref.limit(limit)).valueChanges({idField:'id'});
  // }
  // getRevNotes(limit:number) {
  //   return this.db.collection("notesRev",ref=>ref.limit(limit)).valueChanges({idField:'id'});
  // }
  // getExamNotes(limit:number) {
  //   return this.db.collection("notesExam",ref=>ref.limit(limit)).valueChanges({idField:'id'});
  // }
  // getMessages(limit:number) {
  //   return this.db.collection("contacts",ref=>ref.limit(limit)).valueChanges({idField:'id'});
  // }
  // getUser(email:number) {
  //   return this.db.collection("admin",ref=>ref.where("email","==",email).where("statut","==",true)).get();
  // }
  // getApprenantsEnCours() {
  //   return this.db.collection("apprenants",ref=>ref.where("statut","==",true)).valueChanges({idField:'id'});
  // }
  // getAdminEnCours() {
  //   return this.db.collection("admin",ref=>ref.where("statut","==",true)).valueChanges({idField:'id'});
  // }
  // delete(id: any) {
  //   return this.db.collection("apprenants").doc(id).delete();
  // }
  // deleteAdmin(id: any) {
  //   return this.db.collection("admin").doc(id).delete();
  // }
  // deleteMessage(id: any) {
  //   return this.db.collection("contacts").doc(id).delete();
  // }
}
