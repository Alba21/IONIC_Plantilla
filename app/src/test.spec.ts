import {
    JsonpModule,
    Jsonp,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    Http,
} from "@angular/http";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import {HttpProvider} from './providers/http/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


describe('Service: Search', () => {

  let service: HttpProvider;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HttpProvider,
        MockBackend,
        HttpClientModule,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    // Get the MockBackend
    backend = TestBed.get(MockBackend);

    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(HttpProvider);

  });

  it('search should return SearchItems', fakeAsync(() => {
    let response = {
      "resultCount": 1,
      "results": [
        {
          "alumno": "estudiante1",
          "curso": "curso1",
          "nota": "80",
        }]
    };

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    // Perform a request and make sure we get the response we expect
    service.agregar_nota("estudiante1","curso1","80");
    tick();

    expect(service.agregar_nota.length).toBe(1);
    
  }));
});