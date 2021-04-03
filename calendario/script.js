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

    month = 3;

    switch(month){
        case 0 :
            month = 'Janeiro'
            maincalendario.innerHTML = ` 
            <div class="row" id="calendario-data">           
            <div class="col-md-6 col-sm-6" id="tabela">
                <table class="table-condensed table-bordered table-striped month">
                    <thead>
                        <tr>
                        <th colspan="7" class="text-white bg-warning title-calendario">
                            <a class="btn"><strong>Janeiro</strong></a>
                        </th>
                        </tr>
                        <tr class="text-warning">
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
                            <td class="text-muted">27</td>
                            <td class="text-muted">28</td>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Ano-Novo" class="text-warning" target="_blank"><button><strong>1</strong></a></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td class="text-muted">1</td>
                            <td class="text-muted">2</td>
                            <td class="text-muted">3</td>
                            <td class="text-muted">4</td>
                            <td class="text-muted">5</td>
                            <td class="text-muted">6</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-warning"><strong>Feriados (Feveriero)</strong></li>
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
                        <th colspan="7" class="text-white bg-warning title-calendario">
                            <a class="btn"><strong>Fevereiro</strong></a>
                        </th>
                        </tr>
                        <tr class="text-warning">
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
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>15</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Carnaval" class="text-warning" target="_blank"><button><strong>16</strong></a></td>
                            <td><a href="https://pt.wikipedia.org/wiki/Quarta-feira_de_cinzas" class="text-warning" target="_blank"><button><strong>17</strong></a></td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td class="text-muted">1</td>
                            <td class="text-muted">2</td>
                            <td class="text-muted">3</td>
                            <td class="text-muted">4</td>
                            <td class="text-muted">5</td>
                            <td class="text-muted">6</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-warning"><strong>Feriados (Fevereiro)</strong></li>
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
                        <th colspan="7" class="text-white bg-warning title-calendario">
                            <a class="btn"><strong>Março</strong></a>
                        </th>
                        </tr>
                        <tr class="text-warning">
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
                            <td class="text-muted">28</td>
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Dia_Internacional_da_Mulher" class="text-warning" target="_blank"><button class="text-primary"><strong>8</strong></a></td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="text-muted">1</td>
                            <td class="text-muted">2</td>
                            <td class="text-muted">3</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6">
                <ul class="list-group list-group-flush" id="lista-data">
                    <li class="list-group-item text-white bg-warning"><strong>Feriados (Março)</strong></li>
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
                        <th colspan="7" class="text-white bg-danger title-calendario">
                            <a class="btn"><strong>Abril</strong></a>
                        </th>
                        </tr>
                        <tr class="text-danger">
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
                            <td class="text-muted">28</td>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td> 
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td><a href="https://pt.wikipedia.org/wiki/Páscoa" class="text-danger" target="_blank"><button><strong>4</strong></a></td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Dia_do_Índio" class="text-danger" target="_blank"><button><strong>19</strong></a></td>
                            <td>20</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Tiradentes" class="text-danger" target="_blank"><button><strong>21</strong></a></td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td class="text-muted">1</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-danger"><strong>Feriados (Abril)</strong></li>
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
                        <th colspan="7" class="text-white bg-danger title-calendario">
                            <a class="btn"><strong>Maio</strong></a>
                        </th>
                        </tr>
                        <tr class="text-danger">
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
                            <td><a href="https://pt.wikipedia.org/wiki/Dia_do_Trabalhador" class="text-danger" target="_blank"><button><strong>1</strong></a></td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Dia_das_M%C3%A3es" class="text-danger" target="_blank"><button><strong>9</strong></a></td>
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
                    <li class="list-group-item text-white bg-danger"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 1</strong> - Dia do Trabalho</li>
                    <li class="list-group-item"><strong>Dia 9</strong> - Dia das mães</li>
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
                        <th colspan="7" class="text-white bg-danger title-calendario">
                            <a class="btn"><strong>Junho</strong></a>
                        </th>
                        </tr>
                        <tr class="text-danger">
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
                            <td><a href="https://pt.wikipedia.org/wiki/Ano-Novo" class="text-danger" target="_blank"><button><strong>3</strong></a></td>
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
                            <td><a href="https://pt.wikipedia.org/wiki/Ano-Novo" class="text-danger" target="_blank"><button><strong>12</strong></a></td>
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
                            <td><a href="https://pt.wikipedia.org/wiki/Ano-Novo" class="text-danger" target="_blank"><button><strong>24</strong></a></td>
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
                    <li class="list-group-item text-white bg-danger"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 3</strong> - Corpus Christi</li>
                    <li class="list-group-item"><strong>Dia 12</strong> - Dia dos namorados</li>
                    <li class="list-group-item"><strong>Dia 24</strong> - Dia de São João</li>
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
                            <a class="btn"><strong>Julho</strong></a>
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
                            <td><a href="https://pt.wikipedia.org/wiki/Ano-Novo" class="text-primary" target="_blank"><button><strong>9</strong></a></td>
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
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Julho)</strong></li>
                    <li class="list-group-item"><strong>Dia 9</strong> - Dia da revolução constitucionalista</li>
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
                            <a class="btn"><strong>Agosto</strong></a>
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
                            <td>1</td>  
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td><a href="https://pt.wikipedia.org/wiki/Dia-dos-Pais" class="text-primary" target="_blank"><button><strong>8</strong></a></td>
                            <td><button href="#">9</td>
                            <td><button href="#">10</td>
                            <td><button href="#">11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
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
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Agosto)</strong></li>
                    <li class="list-group-item"><strong>Dia 8</strong> - Dia dos pais</li>
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
                            <a class="btn"><strong>Setembro</strong></a>
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
                            <td><a href="https://pt.wikipedia.org/wiki/Dia-dos-Pais" class="text-primary" target="_blank"><button><strong>7</strong></a></td>
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
                    <li class="list-group-item text-white bg-primary"><strong>Feriados (Setembro)</strong></li>
                    <li class="list-group-item"><strong>Dia 7</strong> - Dia da Independência do Brasil </li>
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
                        <th colspan="7" class="text-white bg-success title-calendario">
                            <a class="btn"><strong>Outubro</strong></a>
                        </th>
                        </tr>
                        <tr class="text-success">
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
                            <td class="text-muted">27</td>
                            <td class="text-muted">28</td>
                            <td class="text-muted">29</td>
                            <td class="text-muted">30</td>
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>11</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Dia-das-Crianças" class="text-success" target="_blank"><button><strong>12</strong></a></td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td><a href="https://pt.wikipedia.org/wiki/Dia-das-Bruxas" class="text-success" target="_blank"><button><strong>31</strong></a></td>
                            <td class="text-muted">1</td>
                            <td class="text-muted">2</td>
                            <td class="text-muted">3</td>
                            <td class="text-muted">4</td>
                            <td class="text-muted">5</td>
                            <td class="text-muted">6</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
                <div class="col-md-6 col-sm-6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-white bg-success"><strong>Feriados (Outubro)</strong></li>
                    <li class="list-group-item"><strong>Dia 12</strong> - Dia das Crianças</li>
                    <li class="list-group-item"><strong>Dia 31</strong> - Dia das Bruxas</li>
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
                        <th colspan="7" class="text-white bg-success title-calendario">
                            <a class="btn"><strong>Novembro</strong></a>
                        </th>
                        </tr>
                        <tr class="text-success">
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
                            <td class="text-muted">31</td>
                            <td>1</td>  
                            <td><a href="https://pt.wikipedia.org/wiki/Dia_dos_Fi%C3%A9is_Defuntos" class="text-success" target="_blank"><button><strong>2</strong></a></td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td><a href="https://pt.wikipedia.org/wiki/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_do_Brasil" class="text-success" target="_blank"><button><strong>15</strong></a></td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
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
                    <li class="list-group-item text-white bg-success"><strong>Feriados (Novembro)</strong></li>
                    <li class="list-group-item"><strong>Dia 2</strong> - Dia de Finados</li>
                    <li class="list-group-item"><strong>Dia 15</strong> - Proclamação da Bandeira</li>
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
                        <th colspan="7" class="text-white bg-success title-calendario">
                            <a class="btn"><strong>Dezembro</strong></a>
                        </th>
                        </tr>
                        <tr class="text-success">
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
                            <td><a href="https://pt.wikipedia.org/wiki/Natal" class="text-success" target="_blank"><button><strong>25</strong></a></td>
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
                    <li class="list-group-item text-white bg-success"><strong>Feriados (Março)</strong></li>
                    <li class="list-group-item"><strong>Dia 25</strong> - Natal</li>
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

    let realtime = hour+':'+minute+':'+seconds+'<br> <strong>Data : </strong>Dia '+day+' de '+month+' de '+ `<strong>${year}</strong>`

    document.getElementById('timer').innerHTML = `<strong>Horas : </strong>${realtime}`

}


function inittime(){
    setInterval (showtime, 1000)
}
