import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  cadastro: FormGroup;

  get form() {
    return this.cadastro.controls;
  }

  constructor( 
    public validacao: ValidarCamposService,
    private fb: FormBuilder
  ) { }

  ngOnInit():void {

    this.cadastro = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      urlFoto: ['', [Validators.required]],
      dtLancamento: ['', [Validators.required]],
      descricao: [''],
      nota: [0, [Validators.required, Validators.minLength(0), Validators.max(10)]],
      urlIMDB: ['', [Validators.minLength(0)]],
      genero: ['', [Validators.required]]
    });
  }

  salvar(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }
    alert('Sucesso \n\n'+JSON.stringify(this.cadastro.value, null, 4));
  }

  reiniciar(): void {
    this.cadastro.reset();
  }

}
