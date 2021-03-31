// Fazer um relógio em tempo real //
const maincalendario = document.getElementById("main-calendar");


function showtime(){

    var time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()    
    var day = time.getDate()
    var month = time.getMonth()
    var year = time.getFullYear()   



    switch(month){
        case 0 :
            month = 'Janeiro'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Janeiro</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Ano-Novo" target="_blank"><button class="text-primary"><strong>1</strong></a></td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Feveriero)</strong></li>
                    <li class="list-group-item"><strong>Dia 1</strong> - Ano Novo</li>
                </ul>
                </div>
            </div>`
            break
        case 1 :
            month = 'Fevereiro'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Fevereiro</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Carnaval" target="_blank"><button class="text-primary"><strong>16</strong></a></td>
                            <td><a href="https://pt.wikipedia.org/wiki/Quarta-feira_de_cinzas" target="_blank"><button class="text-primary"><strong>17</strong></a></td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td class="text-muted">1</td>
                            <td class="text-muted">2</td>
                            <td class="text-muted">3</td>
                            <td class="text-muted">4</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Fevereiro)</strong></li>
                    <li class="list-group-item"><strong>Dia 16</strong> - Carnaval</li>
                    <li class="list-group-item"><strong>Dia 17</strong> - Quarta Feira de Cinzas</li>
                </ul>
                </div>
            </div>`
            break
        case 2 :
            month = 'Março'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Dia_Internacional_da_Mulher" target="_blank"><button class="text-primary"><strong>16</strong></a></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6">
                <ul class="list-group list-group-flush" id="lista-data">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
        case 3 :
            month = 'Abril'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Abril</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td> 
                            <td>2</td>
                            <td>3</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Páscoa" target="_blank"><button class="text-primary"><strong>4</strong></a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td><a href="https://pt.wikipedia.org/wiki/Dia_do_Índio" target="_blank"><button class="text-primary"><strong>19</strong></a></td>
                            <td>20</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Tiradentes" target="_blank"><button class="text-primary"><strong>21</strong></a></td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 4</strong> - Feriado de Páscoa </li>
                    <li class="list-group-item"><strong>Dia 19</strong> - Dia do Índio </li>
                    <li class="list-group-item"><strong>Dia 21</strong> - Feriado de Tiradentes </li>
                </ul>
                </div>
            </div>`
            break
        case 4 :
            month = 'Maio'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><button href="#" class="text-primary"><strong>8</strong></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
        case 5 :
            month = 'Junho'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><button href="#" class="text-primary"><strong>8</strong></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
        case 6 : 
            month = 'Julho'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><button href="#" class="text-primary"><strong>8</strong></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
        case 7 :
            month = 'Agosto'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><button href="#" class="text-primary"><strong>8</strong></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
        case 8 :
            month = 'Setembro'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><button href="#" class="text-primary"><strong>8</strong></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
        case 9 : 
            month = 'Outubro'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><button href="#" class="text-primary"><strong>8</strong></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
        case 10 :
            month = 'Novembro'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><button href="#" class="text-primary"><strong>8</strong></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
        case 11 :
            month = 'Dezembro'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-primary title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-primary">
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td><button href="#" class="text-primary"><strong>8</strong></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia internacional da mulher</li>
                </ul>
                </div>
            </div>`
            break
    }

    if ( hour < 10 ){
        hour = '0'+hour
    }
    if ( minute < 10 ){
        minute = '0'+minute
    }
    if ( seconds < 10 ){
        seconds = '0'+seconds
    }

    let realtime = hour+':'+minute+':'+seconds+'<br> <strong>Data:</strong>Dia '+day+' de '+month+' de '+ `<strong>${year}</strong>`

    document.getElementById('timer').innerHTML = `<strong>Horas:</strong>${realtime}`

}


function inittime(){
    setInterval (showtime, 1000)
}
