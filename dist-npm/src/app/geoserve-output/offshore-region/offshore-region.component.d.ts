import { OnInit } from '@angular/core';
import { RegionsService } from '../../regions.service';
export declare class OffshoreRegionComponent implements OnInit {
    readonly regionsService: RegionsService;
    constructor(regionsService: RegionsService);
    ngOnInit(): void;
}
