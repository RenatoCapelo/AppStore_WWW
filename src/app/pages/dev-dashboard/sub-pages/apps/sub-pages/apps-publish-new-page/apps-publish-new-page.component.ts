import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { applicationCategory } from 'src/models/AppCategory/applicationCategory.model';
import { AppCategoriesService } from 'src/services/appCategories/app-categories.service';

@Component({
  selector: 'app-apps-publish-new-page',
  templateUrl: './apps-publish-new-page.component.html',
  styleUrls: ['./apps-publish-new-page.component.sass']
})
export class AppsPublishNewPageComponent implements OnInit {

  detailsFormGroup: FormGroup;
  fileFormGroup: FormGroup;
  categories: applicationCategory[];

  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute, private categoriesService: AppCategoriesService) {
    this.categories = [];
    this.detailsFormGroup = _formBuilder.group({
      title: ['', Validators.required],
      description: ['',Validators.required],
      idAppCategory: ['',Validators.required]
    });
    this.fileFormGroup = _formBuilder.group({
      apk: ['', Validators.required],
      fileSource: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.categoriesService.getCategoriesByMaster(this.route.snapshot.paramMap.get("master")! == "Game" ? 2:1)
    .subscribe({
      next: (res)=>this.categories = res
    })
  }

  onFileChange(ev:any){
    console.log(ev);
    if (ev.target.files.length > 0) {
      const file = ev.target.files[0];
      console.log(file);
      this.fileFormGroup.patchValue({
        fileSource: file
      });
    }
  }

}
