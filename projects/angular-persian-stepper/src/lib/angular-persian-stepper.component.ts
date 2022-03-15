import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'persian-stepper',
  templateUrl: './angular-persian-stepper.component.html',
  styleUrls: ['./angular-persian-stepper.component.css']
})
export class AngularPersianStepperComponent implements OnInit {
  @Input() logoPath = '';
  mainStepNumber = 4;
  stepTemplate1 = {
    title: 'اولین پلتفرم حوزه ساختمان',
    text: [
      'طراحی اولین پلتفرم حوزه ساختمان'
    ]
  };
  stepTemplate2 = {
    title: 'حضور در مرکز رشد دانشگاه علم و صنعت',
    text: [
      'حضور در مرکز رشد واحدهای فناور دانشگاه علم و صنعت ',
      'توسعه تشکیلات'
    ]
  };
  stepTemplate3 = {
    title: 'مرجع خدمات پیمانکاری در صنعت ساختمان',
    text: [
      'مرجع قیمت روز حوزه مصالح  ساختمانی ',
      'مرجع انتخاب پیمانکاران حوزه ساختمان با بیش از 5000 پیمانکار',
      'رسیدن  به رکورد 100 هزار مشتری در ماه'
    ]
  };
  stepTemplate4 = {
    title: 'فروش مصالح ساختمانی',
    text: [
      'ارزیابی کیفی و قیمتی فروشندگان و پیمانکاران',
      'ورود  به  حوزه فروش مصالح',
      'شروع  به کار بخش بخش طراحی و کنترل پروژه',
      'پربازدیدترین سایت صنعت ساختمان بر اساس رَنک  Alexa'
    ]
  };
  stepTemplate5 = {
    title: 'مدیریت تامین کالا و خدمات (طراحی و اجرا)',
    text: [
      'مدیریت تامین کالا و خدمات پروژه های ساختمانی',
      'مرجع خدمات طراحی',
      'توسعه حوزه های فروش کالا در کل کشور',
      'همکاری با سازندگان کل کشور'
    ]
  };
  stepTemplate6 = {
    title: 'فعالیت به عنوان شرکت EPC',
    text: [
      'مرجع کیفی کل صنعت ساختمان کشور',
      'فعالیت به عنوان شرکت EPC',
      'عرضه کالا و خدمات به خارج از  کشور',
    ]
  };
  stepLabels = ['۱۳۹۷', '۱۳۹۸', '۱۳۹۹', '۱۴۰۰', '۱۴۰۱', '۱۴۰۵'];
  stepTemplates = [this.stepTemplate1, this.stepTemplate2, this.stepTemplate3, this.stepTemplate4, this.stepTemplate5, this.stepTemplate6];

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let id = 'step-prefixes';
    const steps = this.document.getElementById(id) as HTMLElement;
    id = 'step-contents';
    const contents = this.document.getElementById(id) as HTMLElement;
    id = 'step-arrows';
    const arrows = this.document.getElementById(id) as HTMLElement;
    contents.style.height = (steps?.clientHeight || 0).toString() + 'px';
    arrows.style.height = (.7 * steps?.clientHeight || 0).toString() + 'px';
    if (this.logoPath !== '') {
      (this.document.querySelector('.step-pointer.active') as HTMLElement).style.backgroundImage = this.logoPath;
    }
    this.buildStepContents();
  }
  buildStepContents(): void {
    let id = '';
    const refrenceGrowFactor = this.stepLabels.length;
    let growthFactor = -1;
    for (let index = 0; index < refrenceGrowFactor; index++) {
      id = 'content' + index;
      const content = this.document.getElementById(id) as HTMLElement;
      growthFactor = index - this.mainStepNumber  + 1;

      if (growthFactor === 0) {
        (content.parentNode as HTMLElement).style.flexGrow = '1';
        content.style.width = '100%';
        content.style.opacity = '1';
      } else {
        if (growthFactor < 0) {
          content.classList.remove('bottom-step-contents');
          content.classList.add('top-step-contents');
        } else if (growthFactor > 0) {
          content.classList.add('bottom-step-contents');
          content.classList.remove('top-step-contents');
        }
        growthFactor = Math.abs(growthFactor);
        const width = (100 - growthFactor * 7) + '%';
        (content.parentNode as HTMLElement).style.flexGrow = ((refrenceGrowFactor - growthFactor) / refrenceGrowFactor).toString();
        content.style.width = width;
        if (growthFactor === 1) {
          content.style.opacity = '.8';
        } else if (growthFactor === 2) {
          content.style.opacity = '.6';
        } else if (growthFactor >= 3) {
          content.style.opacity = '.4';
        }
      }
    }
  }

  changeActiveStep(index: number): void {
    this.mainStepNumber = index + 1;
    this.buildStepContents();
  }

  backNextStep(direction: string): void {
    if (direction === 'top') {
      if (this.mainStepNumber === 1) {
        return;
      }
      this.mainStepNumber --;
      this.buildStepContents();
    } else {
      if (this.mainStepNumber === this.stepLabels.length) {
        return;
      }
      this.mainStepNumber ++;
      this.buildStepContents();
    }
  }

}

