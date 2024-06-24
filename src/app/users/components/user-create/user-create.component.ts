import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from '../../../interfaces/users.interfaces';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent implements OnInit {

  showComponentUserlist:boolean = false;
  updEditUser:boolean = false;
  imgperfilglobalOnChange: any;
  imgperfilglobal: any;
  imgURL: any;
  form: FormGroup<{
    names: FormControl<string | null>;
    username: FormControl<string | null>;
    lastName: FormControl<string | null>;
    secondLastName: FormControl<string | null>;
    roles: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
    creation: FormControl<string | null>;
    imgperfil: FormControl<string | null>; }>;
  //form: FormGroup<{ name: FormControl<string | null>; username: FormControl<string | null>; apaterno: FormControl<string | null>; secondLastName: FormControl<string | null>; rol: FormControl<string | null>; password: FormControl<string | null>; confirmPassword: FormControl<string | null>; datecreate: FormControl<string | null>; imgperfil: FormControl<string | null>; }>;




  // form=new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   username: new FormControl(''),
  //   apaterno: new FormControl(''),
  //   secondLastName: new FormControl(''),
  //   rol:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   datecreate:new FormControl(''),
  //   imgperfil:new FormControl(''),

  // });

  constructor(
    private userService: UserService,
    private router:Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
    this.form = new FormGroup({
      names: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, Validators.email]),
      lastName: new FormControl('', Validators.required),
      secondLastName: new FormControl(''),
      roles: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      creation: new FormControl('', Validators.required),
      imgperfil: new FormControl('', Validators.required),
    });
  }


  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
  this.loadUser(userId);
  }


  submit(event: Event) {
    event.preventDefault();

    if(this.updEditUser){
      this.updateUser();
    }
    else{
      this.createUser();
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imgperfilglobalOnChange = file;

      // Crea un objeto FileReader
      const reader = new FileReader();

      // Define una función para manejar el evento load del FileReader
      reader.onload = (e: any) => {
        this.imgURL = e.target.result;
        // this.form.get('imgperfil')?.setValue(e.target.result);
      };

      // Lee el archivo de imagen como una URL de datos
      reader.readAsDataURL(file);
    }
    else{
      this.imgURL = null;
      alert("Favor de seleccionar una imagen");
    }
  }



  loadUser(userId: string | null) {
    if (userId) {
      debugger;
      console.log({"idcreat2": userId});
      this.updEditUser = true;

      let userIdNumber = parseInt(userId);
      this.userService.getUserId(userIdNumber).subscribe((user) => {
        console.log(user);
        let photoUserByte = user.photoUserString;

        this.form.patchValue(user);
        console.log({"photoUserByte": photoUserByte});
        this.decodificarBase64(photoUserByte ?? '');

        const creationControl = this.form.get('creation');
        if (creationControl) {
          creationControl.disable(); // Deshabilita el campo username
        }
      });

      // this.userService.getUser(userId).subscribe((user) => {
      //   this.form.patchValue(user);
      // });
    }
  }



  createUser() {
    if(this.imgURL == null){
      alert("Favor de seleccionar una imagen");
      return
    }
    if(this.form.value.password !== this.form.value.confirmPassword){
      alert("Las contraseñas coinciden, favor de verificarlas");
      return
    }
    const formData = this.creationFormdata();

    this.userService.createUser(formData).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/user-list']);
      },
      (error) => console.log(error)
    );

  }

  updateUser() {
    alert("updateUser");
    debugger;
    if(this.imgURL == null){
      alert("Favor de seleccionar una imagen");
      return
    }
    if(this.form.value.password !== this.form.value.confirmPassword){
      alert("Las contraseñas coinciden, favor de verificarlas");
      return
    }
    const formData = this.creationFormdata();

    this.userService.updateUser(formData).subscribe(
      (response) => {
        debugger;
        console.log(response);
        this.router.navigate(['/user-list']);
      },
      (error) => {
        debugger;
        console.log(error);
      }
    );

  }

  deletedUser(){

  }

  creationFormdata():FormData{
    const users: users = {
      id: 0,
      names: this.form.value.names ?? '',
      lastName: this.form.value.lastName ?? '',
      secondLastName: this.form.value.secondLastName ?? '',
      username: this.form.value.username ?? '',
      roles: this.form.value.roles ?? '',
      creation: this.form.value.creation ?? '',
      password: this.form.value.password ?? '',

    };
    const formData = new FormData();
    formData.append('users', JSON.stringify(users));
    // Agrega la imagen al FormData
    formData.append('photoUser', this.imgperfilglobalOnChange, this.imgperfilglobalOnChange.name);
    return formData;
  }




  decodificarBase64(str: string): void {
    let photoUserByte = new Uint8Array(atob(str).split('').map(char => char.charCodeAt(0)));
    let blob = new Blob([photoUserByte], { type: 'image/jpeg' });
    let imageUrlLoad = URL.createObjectURL(blob);
    this.imgURL = imageUrlLoad;
  }




}
