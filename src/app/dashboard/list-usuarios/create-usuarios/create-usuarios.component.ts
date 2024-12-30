import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../../../service/usuarios.service';
import { AlertSwallService } from '../../../core/service/alert-swall.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrl: './create-usuarios.component.css',
  standalone: false
})
export class CreateUsuariosComponent {
  roles!: any[];
  // basicForm: FormGroup;
  // @Input() title: string;
  // @Input() id: string;
  basicForm!: FormGroup;
  @Input() title!: string;
  @Input() id!: string;
  isLoading = false;

  imagen: any;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    public baseService: UsuariosService,
    // public rolService: RolService,
    public alertSwal: AlertSwallService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.listRoles();

    if (this.id !== null) {
      this.baseService.getById(this.id).subscribe(data => {
        this.basicForm.patchValue({
          nombres: data.data.nombres,
          apellidos: data.data.apellidos,
          user: data.data.user,
          password: data.data.password,
          imagen: '',
        });
      });
    }
  }

  createForm() {
    this.basicForm = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      user: ['', [Validators.required]],
      password: [''],
      imagen: [''],
    });
  }

  register(basicForm: any) {

    const formData = new FormData();

    formData.append('nombres', basicForm.nombres);
    formData.append('apellidos', basicForm.apellidos);
    formData.append('user', basicForm.user);
    formData.append('password', basicForm.password);
    // formData.append('imagen', basicForm.imagen);

    if (this.imagen) {
      console.log(this.imagen);
      formData.append('imagen', this.imagen);
    }else{
      formData.append('imagen', '');
    }

    this.isLoading = true;
    if (this.id === null) {
      this.baseService
        .create(formData)
        .pipe(
          finalize(() => {
            this.basicForm.markAsPristine();
            this.isLoading = false;
          })
        )
        .subscribe(
          data => {
            // toastr.success('Exito!', data.success);
            this.alertSwal.showSwallSuccess(data.success);
            this.activeModal.close(data);
          },
          (error: any) => {
            // toastr.error('Error!', error.error);
            this.alertSwal.showSwallError(error.error);
          }
        );
    } else {
      this.baseService
        .updatePost(this.id, formData)
        .pipe(
          finalize(() => {
            this.basicForm.markAsPristine();
            this.isLoading = false;
          })
        )
        .subscribe(
          data3 => {
            // toastr.success('Exito!', data3.success);
            this.alertSwal.showSwallSuccess(data3.success);
            this.activeModal.close(data3);
          },
          (error: any) => {
            // toastr.error('Error!', error.error);
            this.alertSwal.showSwallError(error.error);
          }
        );
    }
  }

  listRoles(){
    // this.rolService.getAll().subscribe(res => {
    //   this.roles = res.data;
    //   console.log(res);
    // });
  }
  
  cargarImagen(event: any){
    this.imagen = event.target.files[0]
  }
}
