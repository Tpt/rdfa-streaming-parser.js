import * as RDF from "rdf-js";
import {IRdfaPattern} from "./IRdfaPattern";

/**
 * Data holder for the RDFa state in XML tags.
 */
export interface IActiveTag {
  name: string;
  prefixesAll: {[prefix: string]: string};
  prefixesCustom: {[prefix: string]: string};
  subject?: RDF.Term | boolean;
  explicitNewSubject?: boolean;
  predicates?: RDF.Term[];
  object?: RDF.Term | boolean;
  text?: string[];
  vocab?: string;
  language?: string;
  datatype?: RDF.NamedNode;
  collectChildTags?: boolean;
  collectedPatternTag?: IRdfaPattern;
  interpretObjectAsTime?: boolean;
  incompleteTriples?: { predicate: RDF.Term, reverse: boolean, list?: boolean }[];
  inlist: boolean;
  listMapping: {[predicate: string]: (RDF.Term|boolean)[]};
  listMappingLocal: {[predicate: string]: (RDF.Term|boolean)[]};
  skipElement: boolean;
  localBaseIRI?: RDF.NamedNode;
}